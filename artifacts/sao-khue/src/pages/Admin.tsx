import {
  useEffect,
  useMemo,
  useState,
  type ComponentType,
  type FormEvent,
  type ReactNode,
} from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@workspace/replit-auth-web";
import {
  type Post,
  type SiteSettingsInput,
  useCreatePost,
  useDeletePost,
  useGetSiteSettings,
  useListPosts,
  useUpdatePost,
  useUpdateSiteSettings,
} from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { navMenu } from "@/lib/menu";
import {
  type CommitmentItem,
  type HeroSlide,
  type PricingItem,
  defaultAboutPoints,
  defaultCommitments,
  defaultHeroSlides,
  defaultPricingItems,
} from "@/lib/site-settings";
import { normalizePosts } from "@/lib/posts";
import {
  ensureSlugMatchesSubSlug,
  getMenuChildLabel,
  getMenuChildOptions,
  getMenuChildren,
  getSubCategoryKey,
  inferSubSlugFromPost,
  parseSubCategoryKey,
} from "@/lib/menu-posts";
import {
  BookOpen,
  Building2,
  Calculator,
  ChevronDown,
  ChevronRight,
  Eye,
  FileText,
  Globe,
  ImagePlus,
  LayoutDashboard,
  Layers3,
  LogOut,
  Newspaper,
  PackagePlus,
  Pencil,
  PhoneCall,
  PlayCircle,
  Plus,
  Save,
  Settings2,
  ShieldCheck,
  Trash2,
} from "lucide-react";

type AdminView =
  | "dashboard"
  | "posts"
  | "settings-general"
  | "settings-hero"
  | "settings-about"
  | "settings-commitments"
  | "settings-pricing"
  | "settings-calculator";

type ExtendedSiteSettingsInput = SiteSettingsInput & {
  loadingLogoUrl: string;
  heroSlidesJson: string;
  homeCommitmentsJson: string;
  homePricingJson: string;
  homeVideoUrl: string;
  homeVideoLabel: string;
  homeAboutEyebrow: string;
  homeAboutTitle: string;
  homeAboutIntro: string;
  homeAboutBody: string;
  homeAboutPointsJson: string;
  homeAboutImageUrl: string;
  homeAboutExperienceLabel: string;
  homeAboutExperienceYears: string;
  homeCalculatorConfigJson: string;
};

type FormState = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
};

type SidebarGroup = "dashboard" | "posts" | "homepage" | "settings" | "tools";

const contentSections = navMenu.filter((item) => item.category);

const categoryOptions = contentSections.map((item) => ({
  value: item.category!,
  label: item.title,
}));

const emptyPostForm: FormState = {
  slug: "",
  title: "",
  category: "dich-vu",
  excerpt: "",
  content: "",
  imageUrl: "",
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
};

const defaultExtendedSettings: ExtendedSiteSettingsInput = {
  companyName: "CONG TY TNHH THIET KE VA XAY DUNG SAO KHUE",
  taxCode: "",
  hotline1: "0936 045 268",
  hotline2: "0909 075 668",
  email: "kientrucsaokhue@gmail.com",
  address1: "245/8 Binh Loi, Phuong 13, Quan Binh Thanh, TP.HCM",
  address2: "146 duong 16, khu do thi Van Phuc",
  workingHours: "8:00 - 17:30",
  logoUrl:
    "https://kientrucsaokhue.com/wp-content/uploads/2023/03/z4174323393119_4de9a59b7bd4ac243e066b2c5a15a62b-2.jpg",
  loadingLogoUrl: "",
  facebookUrl: "https://facebook.com/kientrucsaokhue",
  youtubeUrl: "",
  instagramUrl: "",
  zaloPhone: "0936045268",
  messengerUrl: "",
  footerDescription:
    "Uy tin - Chat luong - Tan tam. Chung toi chuyen thiet ke va thi cong xay dung nha pho, biet thu chuyen nghiep.",
  heroSlidesJson: JSON.stringify(defaultHeroSlides),
  homeCommitmentsJson: JSON.stringify(defaultCommitments),
  homePricingJson: JSON.stringify(defaultPricingItems),
  homeVideoUrl: "",
  homeVideoLabel: "Xem video",
  homeAboutEyebrow: "Ve chung toi",
  homeAboutTitle: "CONG TY TNHH THIET KE VA XAY DUNG SAO KHUE",
  homeAboutIntro: "",
  homeAboutBody: "",
  homeAboutPointsJson: JSON.stringify(defaultAboutPoints),
  homeAboutImageUrl: "/images/about.png",
  homeAboutExperienceLabel: "Nam Kinh Nghiem\nXay Dung",
  homeAboutExperienceYears: "10+",
  homeCalculatorConfigJson: JSON.stringify({
    phanThoRates: { "trung-binh": 3550000, "tb-kha": 3700000, "kha": 3800000 },
    tronGoiRates: { "trung-binh": 4850000, "tb-kha": 5500000, "kha": 6700000 },
    note: "Cong thuc tham khao theo don gia xay dung pho bien.",
  }),
  gaTrackingId: "",
  gscVerification: "",
};

function parseArrayValue<T>(value: string | undefined, fallback: T[]): T[] {
  if (!value) return fallback;

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? (parsed as T[]) : fallback;
  } catch {
    return fallback;
  }
}

function stringifyCompact(value: unknown) {
  return JSON.stringify(value);
}

function slugifyVietnamese(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function parseJsonObject<T extends object>(value: string | undefined, fallback: T): T {
  if (!value) return fallback;

  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as T)
      : fallback;
  } catch {
    return fallback;
  }
}

function getSubCategoryOptions(categoryFilter: string) {
  return categoryFilter === "all"
    ? getMenuChildOptions()
    : getMenuChildOptions(categoryFilter);
}

function getSubCategoryDisplay(post: Pick<Post, "slug" | "category">) {
  const leaf = inferSubSlugFromPost(post);
  if (!leaf) return null;
  return getMenuChildLabel(post.category, leaf) ?? leaf;
}

function buildSettingsFromApi(
  data: Record<string, string | number> | null | undefined,
): ExtendedSiteSettingsInput {
  const { id: _id, ...rest } = data ?? {};
  return {
    ...defaultExtendedSettings,
    ...(rest as Partial<ExtendedSiteSettingsInput>),
    heroSlidesJson:
      (rest.heroSlidesJson as string) ?? stringifyCompact(defaultHeroSlides),
    homeCommitmentsJson:
      (rest.homeCommitmentsJson as string) ?? stringifyCompact(defaultCommitments),
    homePricingJson:
      (rest.homePricingJson as string) ?? stringifyCompact(defaultPricingItems),
    loadingLogoUrl:
      (rest.loadingLogoUrl as string) ?? defaultExtendedSettings.loadingLogoUrl,
    homeVideoUrl: (rest.homeVideoUrl as string) ?? defaultExtendedSettings.homeVideoUrl,
    homeVideoLabel:
      (rest.homeVideoLabel as string) ?? defaultExtendedSettings.homeVideoLabel,
    homeAboutEyebrow: (rest.homeAboutEyebrow as string) ?? defaultExtendedSettings.homeAboutEyebrow,
    homeAboutTitle: (rest.homeAboutTitle as string) ?? defaultExtendedSettings.homeAboutTitle,
    homeAboutIntro: (rest.homeAboutIntro as string) ?? defaultExtendedSettings.homeAboutIntro,
    homeAboutBody: (rest.homeAboutBody as string) ?? defaultExtendedSettings.homeAboutBody,
    homeAboutPointsJson:
      (rest.homeAboutPointsJson as string) ?? stringifyCompact(defaultAboutPoints),
    homeAboutImageUrl:
      (rest.homeAboutImageUrl as string) ?? defaultExtendedSettings.homeAboutImageUrl,
    homeAboutExperienceLabel:
      (rest.homeAboutExperienceLabel as string) ??
      defaultExtendedSettings.homeAboutExperienceLabel,
    homeAboutExperienceYears:
      (rest.homeAboutExperienceYears as string) ??
      defaultExtendedSettings.homeAboutExperienceYears,
    homeCalculatorConfigJson:
      (rest.homeCalculatorConfigJson as string) ??
      defaultExtendedSettings.homeCalculatorConfigJson,
  };
}

export default function Admin() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();
  const qc = useQueryClient();
  const { data: posts, refetch: refetchPosts } = useListPosts();
  const { data: siteData, refetch: refetchSettings } = useGetSiteSettings();
  const create = useCreatePost();
  const update = useUpdatePost();
  const remove = useDeletePost();
  const updateSiteSettings = useUpdateSiteSettings();

  const items = normalizePosts(posts);
  const [view, setView] = useState<AdminView>("dashboard");
  const [expandedGroup, setExpandedGroup] = useState<Record<SidebarGroup, boolean>>({
    dashboard: true,
    posts: true,
    homepage: true,
    settings: true,
    tools: true,
  });

  const [editing, setEditing] = useState<Post | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [postForm, setPostForm] = useState<FormState>(emptyPostForm);
  const [postCategoryFilter, setPostCategoryFilter] = useState<string>("all");
  const [postSubCategoryFilter, setPostSubCategoryFilter] = useState<string>("all");
  const [postSubCategory, setPostSubCategory] = useState<string>("");
  const [postSavedAt, setPostSavedAt] = useState<number | null>(null);

  const [settingsForm, setSettingsForm] =
    useState<ExtendedSiteSettingsInput>(defaultExtendedSettings);
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(defaultHeroSlides);
  const [commitments, setCommitments] =
    useState<CommitmentItem[]>(defaultCommitments);
  const [pricingItems, setPricingItems] =
    useState<PricingItem[]>(defaultPricingItems);
  const [aboutPoints, setAboutPoints] = useState<string[]>(defaultAboutPoints);
  const [settingsSavedAt, setSettingsSavedAt] = useState<number | null>(null);

  useEffect(() => {
    if (!editing) return;

    setPostForm({
      slug: editing.slug,
      title: editing.title,
      category: editing.category,
      excerpt: editing.excerpt,
      content: editing.content,
      imageUrl: editing.imageUrl,
      metaTitle: editing.metaTitle ?? "",
      metaDescription: editing.metaDescription ?? "",
      metaKeywords: editing.metaKeywords ?? "",
    });
    setPostSubCategory(inferSubSlugFromPost(editing) ?? "");
    setShowEditor(true);
    setView("posts");
  }, [editing]);

  useEffect(() => {
    if (!siteData) return;
    const built = buildSettingsFromApi(siteData as Record<string, string | number>);
    setSettingsForm(built);
    setHeroSlides(parseArrayValue<HeroSlide>(built.heroSlidesJson, defaultHeroSlides));
    setCommitments(
      parseArrayValue<CommitmentItem>(built.homeCommitmentsJson, defaultCommitments),
    );
    setPricingItems(
      parseArrayValue<PricingItem>(built.homePricingJson, defaultPricingItems),
    );
    setAboutPoints(
      parseArrayValue<string>(built.homeAboutPointsJson, defaultAboutPoints),
    );
  }, [siteData]);

  const selectedSection =
    contentSections.find((section) => section.category === postForm.category) ?? null;
  const selectedChildren = selectedSection?.category
    ? getMenuChildren(selectedSection.category)
    : [];
  const previewSlug = ensureSlugMatchesSubSlug(postForm.slug || "duong-dan-bai-viet", postSubCategory || null);
  const contentText = postForm.content.replace(/<[^>]+>/g, " ").trim();
  const excerptText = postForm.excerpt.trim();
  const estimatedReadingMinutes = Math.max(
    1,
    Math.ceil(contentText.split(/\s+/).filter(Boolean).length / 220),
  );
  const metaTitleLength = (postForm.metaTitle || postForm.title).trim().length;
  const metaDescriptionLength = (postForm.metaDescription || postForm.excerpt).trim().length;
  const articleChecklist = [
    { label: "Da nhap tieu de", done: postForm.title.trim().length > 0 },
    { label: "Da co slug", done: postForm.slug.trim().length > 0 },
    { label: "Da chon danh muc", done: postForm.category.trim().length > 0 },
    { label: "Da co hinh dai dien", done: postForm.imageUrl.trim().length > 0 },
    { label: "Da co tom tat", done: excerptText.length > 0 },
    { label: "Noi dung du toi thieu", done: contentText.length > 160 },
    { label: "Meta title on", done: metaTitleLength > 20 && metaTitleLength <= 70 },
    {
      label: "Meta description on",
      done: metaDescriptionLength > 80 && metaDescriptionLength <= 160,
    },
  ];

  const filteredItems =
    postCategoryFilter === "all"
      ? items
      : items.filter((post) => post.category === postCategoryFilter);

  const subFilteredItems =
    postSubCategoryFilter === "all"
      ? filteredItems
      : filteredItems.filter((post) => {
          const parsed = parseSubCategoryKey(postSubCategoryFilter);
          if (!parsed) return true;
          return (
            post.category === parsed.category &&
            inferSubSlugFromPost(post) === parsed.leaf
          );
        });

  const dashboardStats = useMemo(
    () => [
      {
        label: "Tong bai viet",
        value: items.length,
        icon: Newspaper,
        color: "bg-sky-500",
      },
      {
        label: "Dich vu",
        value: items.filter((post) => post.category === "dich-vu").length,
        icon: Building2,
        color: "bg-emerald-500",
      },
      {
        label: "Cong trinh",
        value: items.filter((post) => post.category === "cong-trinh").length,
        icon: Layers3,
        color: "bg-amber-500",
      },
      {
        label: "Kinh nghiem",
        value: items.filter((post) => post.category === "kinh-nghiem").length,
        icon: BookOpen,
        color: "bg-rose-500",
      },
    ],
    [items],
  );

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#eef1f5]">
        <div className="rounded-2xl bg-white px-8 py-6 text-sm font-medium text-slate-600 shadow">
          Dang tai khu vuc admin...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#eef1f5] p-6">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17579d] text-white shadow">
            <ShieldCheck size={26} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Dang nhap admin</h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Khu vuc nay dung de quan ly bai viet, hero, cam ket, bang bao gia va
            thong tin hien thi ngoai trang chu.
          </p>
          <Button
            onClick={login}
            className="mt-8 h-12 w-full rounded-xl bg-[#17579d] text-base font-semibold text-white hover:bg-[#124884]"
          >
            Dang nhap de tiep tuc
          </Button>
        </div>
      </div>
    );
  }

  function toggleGroup(group: SidebarGroup) {
    setExpandedGroup((prev) => ({ ...prev, [group]: !prev[group] }));
  }

  function resetPostEditor() {
    setEditing(null);
    setShowEditor(false);
    setPostForm(emptyPostForm);
    setPostSubCategory("");
  }

  async function onSubmitPost(e: FormEvent) {
    e.preventDefault();
    const payload = {
      ...postForm,
      slug: ensureSlugMatchesSubSlug(postForm.slug, postSubCategory || null),
    };

    try {
      if (editing) {
        await update.mutateAsync({ slug: editing.slug, data: payload });
      } else {
        await create.mutateAsync({ data: payload });
      }
      await qc.invalidateQueries();
      await refetchPosts();
      setPostSavedAt(Date.now());
      resetPostEditor();
    } catch (err: unknown) {
      alert("Loi luu bai viet: " + (err instanceof Error ? err.message : String(err)));
    }
  }

  async function onDeletePost(slug: string) {
    if (!confirm("Xoa bai viet nay?")) return;
    await remove.mutateAsync({ slug });
    await qc.invalidateQueries();
    await refetchPosts();
  }

  function updateSettingField<K extends keyof ExtendedSiteSettingsInput>(
    key: K,
    value: ExtendedSiteSettingsInput[K],
  ) {
    setSettingsForm((prev) => ({ ...prev, [key]: value }));
  }

  async function saveSettings() {
    const payload: ExtendedSiteSettingsInput = {
      ...settingsForm,
      heroSlidesJson: stringifyCompact(heroSlides),
      homeCommitmentsJson: stringifyCompact(commitments),
      homePricingJson: stringifyCompact(pricingItems),
      homeAboutPointsJson: stringifyCompact(aboutPoints.filter(Boolean)),
    };

    try {
      await updateSiteSettings.mutateAsync({
        data: payload as unknown as SiteSettingsInput,
      });
      await refetchSettings();
      setSettingsSavedAt(Date.now());
    } catch (err: unknown) {
      alert("Loi luu cai dat: " + (err instanceof Error ? err.message : String(err)));
    }
  }

  function renderContent() {
    switch (view) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <SectionTitle
              title="Bang dieu khien"
              desc="Tong quan nhanh ve noi dung website va cac khu vuc can cap nhat."
            />

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">
              {dashboardStats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow ${item.color}`}
                      >
                        <Icon size={30} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-500">{item.label}</div>
                        <div className="mt-1 text-3xl font-bold text-slate-900">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <Panel>
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                  <h3 className="text-2xl font-bold text-slate-900">Cau truc quan ly</h3>
                </div>
                <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
                  <DashboardLinkCard
                    color="bg-[#1f7ae0]"
                    icon={Newspaper}
                    title="Quan ly bai viet"
                    desc="Loc theo danh muc va muc con, sua bai viet, SEO va slug."
                    onClick={() => setView("posts")}
                  />
                  <DashboardLinkCard
                    color="bg-[#16a34a]"
                    icon={ImagePlus}
                    title="Hero homepage"
                    desc="Cap nhat slide, tieu de, mo ta va hinh anh ngoai trang chu."
                    onClick={() => setView("settings-hero")}
                  />
                  <DashboardLinkCard
                    color="bg-[#ca8a04]"
                    icon={ShieldCheck}
                    title="Cam ket homepage"
                    desc="Chinh sua 9 cam ket vang theo tung dong, khong can sua JSON."
                    onClick={() => setView("settings-commitments")}
                  />
                  <DashboardLinkCard
                    color="bg-[#0f766e]"
                    icon={Settings2}
                    title="Thiet lap website"
                    desc="Logo, favicon, hotline, footer va thong tin cong ty."
                    onClick={() => setView("settings-general")}
                  />
                </div>
              </Panel>

              <Panel>
                <div className="border-b border-slate-200 px-6 py-4">
                  <h3 className="text-2xl font-bold text-slate-900">Nhom menu website</h3>
                </div>
                <div className="space-y-3 p-6">
                  {contentSections.map((section) => (
                    <div
                      key={section.category}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-semibold uppercase text-[#17579d]">
                        {section.title}
                      </div>
                      <div className="mt-2 text-sm text-slate-500">
                        {items.filter((post) => post.category === section.category).length} bai viet
                        dang thuoc nhom nay
                      </div>
                      {section.children && section.children.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {section.children.map((child) => (
                            <span
                              key={child.href}
                              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                            >
                              {child.title}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </div>
        );

      case "posts":
        return (
          <div className="space-y-6">
            <StickyToolbar>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#17579d]">
                  Quan ly bai viet
                </div>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Giao dien nhap lieu de thao tac nhanh
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <ToolbarButton
                  icon={Plus}
                  color="bg-[#1f7ae0] hover:bg-[#1867c0]"
                  onClick={() => {
                    resetPostEditor();
                    setShowEditor(true);
                  }}
                >
                  Tao bai moi
                </ToolbarButton>
                {showEditor && (
                  <ToolbarButton
                    icon={Save}
                    color="bg-[#16a34a] hover:bg-[#15803d]"
                    onClick={() => {
                      const form = document.getElementById("post-editor-form");
                      form?.dispatchEvent(
                        new Event("submit", { cancelable: true, bubbles: true }),
                      );
                    }}
                  >
                    Luu bai viet
                  </ToolbarButton>
                )}
              </div>
            </StickyToolbar>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
              <Panel>
                <div className="border-b border-slate-200 px-6 py-4">
                  <h3 className="text-xl font-bold text-slate-900">Danh sach bai viet</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Loc theo danh muc va muc con, giu nguyen logic lien ket ra trang chu.
                  </p>
                </div>

                <div className="space-y-4 p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Danh muc
                      </label>
                      <select
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-[#17579d]"
                        value={postCategoryFilter}
                        onChange={(e) => {
                          setPostCategoryFilter(e.target.value);
                          setPostSubCategoryFilter("all");
                        }}
                      >
                        <option value="all">Tat ca danh muc</option>
                        {categoryOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Muc con menu
                      </label>
                      <select
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-[#17579d]"
                        value={postSubCategoryFilter}
                        onChange={(e) => setPostSubCategoryFilter(e.target.value)}
                      >
                        <option value="all">Tat ca muc con</option>
                        {getSubCategoryOptions(postCategoryFilter).map((child) => (
                          <option key={child.key} value={getSubCategoryKey(child.category, child.leaf)}>
                            {postCategoryFilter === "all"
                              ? `${child.parentTitle} / ${child.title}`
                              : child.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {subFilteredItems.map((post) => (
                      <button
                        key={post.id}
                        type="button"
                        onClick={() => setEditing(post)}
                        className={`w-full rounded-2xl border p-4 text-left transition ${
                          editing?.id === post.id
                            ? "border-[#17579d] bg-[#eef6ff] shadow-sm"
                            : "border-slate-200 bg-white hover:border-[#17579d]/40 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="truncate text-sm font-bold text-slate-900">
                              {post.title}
                            </div>
                            <div className="mt-1 truncate text-xs text-slate-400">
                              /{post.slug}
                            </div>
                          </div>
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase text-slate-600">
                            {post.category}
                          </span>
                        </div>
                        {getSubCategoryDisplay(post) && (
                          <div className="mt-3 inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                            {getSubCategoryDisplay(post)}
                          </div>
                        )}
                        <div className="mt-3 text-xs text-slate-500">
                          {new Date(post.createdAt).toLocaleDateString("vi-VN")}
                        </div>
                      </button>
                    ))}

                    {subFilteredItems.length === 0 && (
                      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">
                        Chua co bai viet nao khop voi bo loc hien tai.
                      </div>
                    )}
                  </div>
                </div>
              </Panel>

              <Panel>
                <form id="post-editor-form" onSubmit={onSubmitPost}>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-6 py-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {editing ? "Chinh sua bai viet" : "Form nhap bai viet"}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Chia theo tung nhom thong tin de thao tac nhanh giong admin truyen thong.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {postSavedAt && (
                        <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                          Da luu luc {new Date(postSavedAt).toLocaleTimeString("vi-VN")}
                        </span>
                      )}
                      <Button
                        type="button"
                        variant="outline"
                        className="rounded-xl"
                        onClick={resetPostEditor}
                      >
                        Lam lai
                      </Button>
                      <Button
                        type="submit"
                        className="rounded-xl bg-[#1f7ae0] text-white hover:bg-[#1867c0]"
                        disabled={create.isPending || update.isPending}
                      >
                        {editing ? "Cap nhat bai viet" : "Luu bai viet"}
                      </Button>
                    </div>
                  </div>

                  {showEditor ? (
                    <div className="grid grid-cols-1 gap-6 p-6 2xl:grid-cols-[minmax(0,1.45fr)_390px]">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                          <EditorStatCard
                            label="Slug preview"
                            value={`/${previewSlug}`}
                            tone="blue"
                          />
                          <EditorStatCard
                            label="Phut doc"
                            value={`${estimatedReadingMinutes} phut`}
                            tone="emerald"
                          />
                          <EditorStatCard
                            label="Meta title"
                            value={`${metaTitleLength}/70`}
                            tone={metaTitleLength > 70 ? "rose" : "amber"}
                          />
                          <EditorStatCard
                            label="Meta description"
                            value={`${metaDescriptionLength}/160`}
                            tone={metaDescriptionLength > 160 ? "rose" : "violet"}
                          />
                        </div>

                        <FormSection
                          title="Thong tin co ban"
                          desc="Chon dung danh muc va muc con de bai viet ra dung vi tri tren menu."
                        >
                          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                            <Field label="Tieu de *">
                              <Input
                                value={postForm.title}
                                onChange={(e) =>
                                  setPostForm((prev) => ({ ...prev, title: e.target.value }))
                                }
                                required
                              />
                              <FieldHint>
                                Tieu de ro rang, co khu vuc hoac nhu cau chinh se giup SEO va preview dep hon.
                              </FieldHint>
                            </Field>

                            <Field label="Duong dan slug *">
                              <Input
                                value={postForm.slug}
                                onChange={(e) =>
                                  setPostForm((prev) => ({ ...prev, slug: e.target.value }))
                                }
                                required
                                disabled={!!editing}
                              />
                              <div className="mt-2 flex flex-wrap gap-2">
                                {!editing && (
                                  <HintActionButton
                                    label="Tu tao tu tieu de"
                                    onClick={() =>
                                      setPostForm((prev) => ({
                                        ...prev,
                                        slug: slugifyVietnamese(prev.title),
                                      }))
                                    }
                                  />
                                )}
                              </div>
                              <FieldHint>
                                Slug hien se ra: <span className="font-semibold text-slate-700">/{previewSlug}</span>
                              </FieldHint>
                            </Field>

                            <Field label="Danh muc *">
                              <select
                                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-[#17579d]"
                                value={postForm.category}
                                onChange={(e) => {
                                  setPostForm((prev) => ({ ...prev, category: e.target.value }));
                                  setPostSubCategory("");
                                }}
                              >
                                {categoryOptions.map((option) => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                            </Field>

                            <Field label="Muc con menu">
                              <select
                                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-[#17579d]"
                                value={postSubCategory}
                                onChange={(e) => setPostSubCategory(e.target.value)}
                              >
                                <option value="">Khong gan muc con</option>
                                {selectedChildren.map((child) => {
                                  const leaf =
                                    child.href.split("/").filter(Boolean).pop() ?? "";
                                  return (
                                    <option key={child.href} value={leaf}>
                                      {child.title}
                                    </option>
                                  );
                                })}
                              </select>
                            </Field>

                            <div className="xl:col-span-2">
                              <Field label="URL hinh dai dien">
                                <Input
                                  value={postForm.imageUrl}
                                  onChange={(e) =>
                                    setPostForm((prev) => ({
                                      ...prev,
                                      imageUrl: e.target.value,
                                    }))
                                  }
                                  placeholder="https://... hoac /images/..."
                                />
                                <FieldHint>
                                  Nen dung anh ngang ro net de card bai viet va preview SEO dep hon.
                                </FieldHint>
                              </Field>
                            </div>

                            {selectedSection && (
                              <div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#17579d]">
                                  Nhom menu dang chon
                                </div>
                                <div className="mt-2 text-sm font-semibold text-slate-900">
                                  {selectedSection.title}
                                </div>
                                {selectedChildren.length > 0 && (
                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {selectedChildren.map((child) => (
                                      <span
                                        key={child.href}
                                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                                      >
                                        {child.title}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </FormSection>

                        <FormSection
                          title="Tom tat va noi dung"
                          desc="Bo tri giong admin dang bai: tom tat rieng, noi dung rieng de de thao tac."
                        >
                          <div className="space-y-4">
                          <Field label="Tom tat">
                            <Textarea
                              rows={3}
                              value={postForm.excerpt}
                                onChange={(e) =>
                                setPostForm((prev) => ({ ...prev, excerpt: e.target.value }))
                              }
                            />
                            <div className="mt-2 flex flex-wrap gap-2">
                              <HintActionButton
                                label="Lay tu noi dung dau bai"
                                onClick={() =>
                                  setPostForm((prev) => ({
                                    ...prev,
                                    excerpt:
                                      contentText.slice(0, 180).trim() || prev.excerpt,
                                  }))
                                }
                              />
                            </div>
                            <FieldHint>
                              Tom tat nen gon, de doc nhanh va dung duoc cho meta description neu can.
                            </FieldHint>
                          </Field>
                          <Field label="Noi dung bai viet">
                            <Textarea
                              rows={16}
                                value={postForm.content}
                                onChange={(e) =>
                                setPostForm((prev) => ({ ...prev, content: e.target.value }))
                              }
                            />
                            <FieldHint>
                              Hien dang doc uoc tinh {estimatedReadingMinutes} phut. Khi nao xong minh se doi sang editor manh hon.
                            </FieldHint>
                          </Field>
                        </div>
                      </FormSection>

                        <FormSection
                          title="SEO"
                          desc="Van giu logic SEO hien tai, chi doi bo cuc nhap lieu de de nhin hon."
                        >
                          <div className="grid grid-cols-1 gap-4">
                            <Field label="Meta title">
                            <Input
                              value={postForm.metaTitle}
                              onChange={(e) =>
                                setPostForm((prev) => ({ ...prev, metaTitle: e.target.value }))
                              }
                            />
                            <div className="mt-2 flex flex-wrap gap-2">
                              <HintActionButton
                                label="Lay tu tieu de bai"
                                onClick={() =>
                                  setPostForm((prev) => ({
                                    ...prev,
                                    metaTitle: prev.title,
                                  }))
                                }
                              />
                            </div>
                            <FieldHint>
                              Muc tieu tot: 35-70 ky tu. Hien tai: {metaTitleLength} ky tu.
                            </FieldHint>
                          </Field>
                          <Field label="Meta keywords">
                            <Input
                                value={postForm.metaKeywords}
                                onChange={(e) =>
                                  setPostForm((prev) => ({
                                    ...prev,
                                  metaKeywords: e.target.value,
                                }))
                              }
                            />
                            <FieldHint>
                              Co the nhap cach nhau bang dau phay: xay nha, thiet ke nha pho, bao gia xay dung...
                            </FieldHint>
                          </Field>
                          <Field label="Meta description">
                            <Textarea
                              rows={4}
                                value={postForm.metaDescription}
                                onChange={(e) =>
                                  setPostForm((prev) => ({
                                    ...prev,
                                  metaDescription: e.target.value,
                                }))
                              }
                            />
                            <div className="mt-2 flex flex-wrap gap-2">
                              <HintActionButton
                                label="Lay tu tom tat"
                                onClick={() =>
                                  setPostForm((prev) => ({
                                    ...prev,
                                    metaDescription: prev.excerpt || contentText.slice(0, 155),
                                  }))
                                }
                              />
                            </div>
                            <FieldHint>
                              Muc tieu tot: 90-160 ky tu. Hien tai: {metaDescriptionLength} ky tu.
                            </FieldHint>
                          </Field>
                        </div>
                      </FormSection>

                        {editing && (
                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={() => onDeletePost(editing.slug)}
                              className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                            >
                              <Trash2 size={16} />
                              Xoa bai viet
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="space-y-6">
                        <FormSection title="Checklist hoan thien">
                          <ChecklistCard items={articleChecklist} />
                        </FormSection>

                        <FormSection title="Preview bai viet">
                          <PostPreviewCard
                            title={postForm.title}
                            excerpt={excerptText}
                            content={contentText}
                            imageUrl={postForm.imageUrl}
                            category={selectedSection?.title ?? postForm.category}
                            subCategory={
                              postSubCategory
                                ? getMenuChildLabel(postForm.category, postSubCategory) ?? postSubCategory
                                : ""
                            }
                            slug={previewSlug}
                            readingMinutes={estimatedReadingMinutes}
                          />
                        </FormSection>

                        <FormSection title="Preview SEO">
                          <SeoPreviewCard
                            title={postForm.metaTitle || postForm.title}
                            description={postForm.metaDescription || postForm.excerpt}
                            slug={previewSlug}
                            keywords={postForm.metaKeywords}
                            titleLength={metaTitleLength}
                            descriptionLength={metaDescriptionLength}
                          />
                        </FormSection>
                      </div>
                    </div>
                  ) : (
                    <div className="p-10">
                      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
                        <PackagePlus className="mx-auto h-12 w-12 text-slate-400" />
                        <h3 className="mt-4 text-xl font-bold text-slate-900">
                          Chon mot bai viet hoac tao bai moi
                        </h3>
                        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                          Bo cuc moi giu nguyen logic luu du lieu hien tai, nhung tach rieng
                          tung phan de ban thao tac nhanh hon giong admin dang bai truyen thong.
                        </p>
                        <Button
                          type="button"
                          className="mt-6 rounded-xl bg-[#1f7ae0] text-white hover:bg-[#1867c0]"
                          onClick={() => setShowEditor(true)}
                        >
                          Tao bai viet moi
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </Panel>
            </div>
          </div>
        );

      case "settings-general":
        return (
          <SettingsScreen
            title="Thong tin website"
            desc="Cac thong tin thuong dung cho logo, favicon, hotline, footer va kenh lien he."
            savedAt={settingsSavedAt}
            isSaving={updateSiteSettings.isPending}
            onSave={saveSettings}
          >
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              <FormSection title="Nhan dien thuong hieu">
                <div className="grid grid-cols-1 gap-4">
                  <Field label="Ten cong ty">
                    <Input
                      value={settingsForm.companyName}
                      onChange={(e) => updateSettingField("companyName", e.target.value)}
                    />
                  </Field>
                  <Field label="URL logo / favicon">
                    <Input
                      value={settingsForm.logoUrl}
                      onChange={(e) => updateSettingField("logoUrl", e.target.value)}
                    />
                  </Field>
                  <Field label="URL logo loading">
                    <Input
                      value={settingsForm.loadingLogoUrl}
                      onChange={(e) =>
                        updateSettingField("loadingLogoUrl", e.target.value)
                      }
                      placeholder="Neu bo trong se dung logo chinh"
                    />
                  </Field>
                  <Field label="Ma so thue">
                    <Input
                      value={settingsForm.taxCode}
                      onChange={(e) => updateSettingField("taxCode", e.target.value)}
                    />
                  </Field>
                </div>
              </FormSection>

              <FormSection title="Lien he nhanh">
                <div className="grid grid-cols-1 gap-4">
                  <Field label="Hotline chinh">
                    <Input
                      value={settingsForm.hotline1}
                      onChange={(e) => updateSettingField("hotline1", e.target.value)}
                    />
                  </Field>
                  <Field label="Hotline phu">
                    <Input
                      value={settingsForm.hotline2}
                      onChange={(e) => updateSettingField("hotline2", e.target.value)}
                    />
                  </Field>
                  <Field label="Email">
                    <Input
                      value={settingsForm.email}
                      onChange={(e) => updateSettingField("email", e.target.value)}
                    />
                  </Field>
                  <Field label="Gio lam viec">
                    <Input
                      value={settingsForm.workingHours}
                      onChange={(e) =>
                        updateSettingField("workingHours", e.target.value)
                      }
                    />
                  </Field>
                  <Field label="Link video homepage">
                    <Input
                      value={settingsForm.homeVideoUrl}
                      onChange={(e) =>
                        updateSettingField("homeVideoUrl", e.target.value)
                      }
                      placeholder="YouTube, Vimeo hoac embed URL"
                    />
                  </Field>
                  <Field label="Label nut video">
                    <Input
                      value={settingsForm.homeVideoLabel}
                      onChange={(e) =>
                        updateSettingField("homeVideoLabel", e.target.value)
                      }
                    />
                  </Field>
                </div>
              </FormSection>

              <FormSection title="Dia chi va mang xa hoi">
                <div className="grid grid-cols-1 gap-4">
                  <Field label="Dia chi tru so">
                    <Input
                      value={settingsForm.address1}
                      onChange={(e) => updateSettingField("address1", e.target.value)}
                    />
                  </Field>
                  <Field label="Dia chi van phong">
                    <Input
                      value={settingsForm.address2}
                      onChange={(e) => updateSettingField("address2", e.target.value)}
                    />
                  </Field>
                  <Field label="Facebook URL">
                    <Input
                      value={settingsForm.facebookUrl}
                      onChange={(e) =>
                        updateSettingField("facebookUrl", e.target.value)
                      }
                    />
                  </Field>
                  <Field label="Youtube URL">
                    <Input
                      value={settingsForm.youtubeUrl}
                      onChange={(e) => updateSettingField("youtubeUrl", e.target.value)}
                    />
                  </Field>
                  <Field label="Instagram URL">
                    <Input
                      value={settingsForm.instagramUrl}
                      onChange={(e) =>
                        updateSettingField("instagramUrl", e.target.value)
                      }
                    />
                  </Field>
                  <Field label="So Zalo">
                    <Input
                      value={settingsForm.zaloPhone}
                      onChange={(e) => updateSettingField("zaloPhone", e.target.value)}
                    />
                  </Field>
                  <Field label="Messenger URL">
                    <Input
                      value={settingsForm.messengerUrl}
                      onChange={(e) =>
                        updateSettingField("messengerUrl", e.target.value)
                      }
                    />
                  </Field>
                </div>
              </FormSection>

              <FormSection title="Footer va tracking">
                <div className="grid grid-cols-1 gap-4">
                  <Field label="Mo ta footer">
                    <Textarea
                      rows={4}
                      value={settingsForm.footerDescription}
                      onChange={(e) =>
                        updateSettingField("footerDescription", e.target.value)
                      }
                    />
                  </Field>
                  <Field label="Google Analytics ID">
                    <Input
                      value={settingsForm.gaTrackingId}
                      onChange={(e) =>
                        updateSettingField("gaTrackingId", e.target.value)
                      }
                    />
                  </Field>
                  <Field label="Google Search Console verification">
                    <Input
                      value={settingsForm.gscVerification}
                      onChange={(e) =>
                        updateSettingField("gscVerification", e.target.value)
                      }
                    />
                  </Field>
                </div>
              </FormSection>

              <FormSection
                title="Preview nhanh"
                desc="Khu nay cho ban xem nhanh logo, thong tin lien he, favicon va nut video se hien thi ra ngoai nhu the nao."
              >
                <GeneralPreviewCard settings={settingsForm} />
              </FormSection>
            </div>
          </SettingsScreen>
        );

      case "settings-hero":
        return (
          <SettingsScreen
            title="Hero homepage"
            desc="Nhap slide theo tung item, khong can sua JSON thu cong."
            savedAt={settingsSavedAt}
            isSaving={updateSiteSettings.isPending}
            onSave={saveSettings}
            primaryLabel="Luu hero"
          >
            <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1.55fr)_420px]">
              <div className="space-y-4">
                {heroSlides.map((slide, index) => (
                  <RepeatCard
                    key={`hero-${index}`}
                    title={`Slide ${index + 1}`}
                    onRemove={
                      heroSlides.length > 1
                        ? () =>
                            setHeroSlides((prev) =>
                              prev.filter((_, itemIndex) => itemIndex !== index),
                            )
                        : undefined
                    }
                  >
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                      <Field label="Hinh anh">
                        <Input
                          value={slide.image}
                          onChange={(e) =>
                            setHeroSlides((prev) =>
                              prev.map((item, itemIndex) =>
                                itemIndex === index
                                  ? { ...item, image: e.target.value }
                                  : item,
                              ),
                            )
                          }
                        />
                      </Field>
                      <Field label="Sub title">
                        <Input
                          value={slide.subtitle}
                          onChange={(e) =>
                            setHeroSlides((prev) =>
                              prev.map((item, itemIndex) =>
                                itemIndex === index
                                  ? { ...item, subtitle: e.target.value }
                                  : item,
                              ),
                            )
                          }
                        />
                      </Field>
                      <div className="xl:col-span-2">
                        <Field label="Title">
                          <Input
                            value={slide.title}
                            onChange={(e) =>
                              setHeroSlides((prev) =>
                                prev.map((item, itemIndex) =>
                                  itemIndex === index
                                    ? { ...item, title: e.target.value }
                                    : item,
                                ),
                              )
                            }
                          />
                        </Field>
                      </div>
                      <div className="xl:col-span-2">
                        <Field label="Description">
                          <Textarea
                            rows={4}
                            value={slide.description}
                            onChange={(e) =>
                              setHeroSlides((prev) =>
                                prev.map((item, itemIndex) =>
                                  itemIndex === index
                                    ? { ...item, description: e.target.value }
                                    : item,
                                ),
                              )
                            }
                          />
                        </Field>
                      </div>
                    </div>
                  </RepeatCard>
                ))}
                <AddRowButton
                  label="Them slide"
                  onClick={() =>
                    setHeroSlides((prev) => [
                      ...prev,
                      {
                        image: "",
                        title: "",
                        subtitle: "",
                        description: "",
                      },
                    ])
                  }
                />
              </div>

              <FormSection title="Preview hero">
                <HeroPreviewCard
                  slides={heroSlides}
                  videoLabel={settingsForm.homeVideoLabel}
                  hasVideo={Boolean(settingsForm.homeVideoUrl)}
                />
              </FormSection>
            </div>
          </SettingsScreen>
        );

      case "settings-about":
        return (
          <SettingsScreen
            title="Thong tin cong ty o homepage"
            desc="Sua noi dung block gioi thieu o trang chu theo tung o nhap lieu."
            savedAt={settingsSavedAt}
            isSaving={updateSiteSettings.isPending}
            onSave={saveSettings}
            primaryLabel="Luu thong tin cong ty"
          >
            <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1.55fr)_420px]">
              <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                <FormSection title="Noi dung chinh">
                  <div className="grid grid-cols-1 gap-4">
                    <Field label="Eyebrow">
                      <Input
                        value={settingsForm.homeAboutEyebrow}
                        onChange={(e) =>
                          updateSettingField("homeAboutEyebrow", e.target.value)
                        }
                      />
                    </Field>
                    <Field label="Tieu de">
                      <Input
                        value={settingsForm.homeAboutTitle}
                        onChange={(e) =>
                          updateSettingField("homeAboutTitle", e.target.value)
                        }
                      />
                    </Field>
                    <Field label="Doan mo ta 1">
                      <Textarea
                        rows={4}
                        value={settingsForm.homeAboutIntro}
                        onChange={(e) =>
                          updateSettingField("homeAboutIntro", e.target.value)
                        }
                      />
                    </Field>
                    <Field label="Doan mo ta 2">
                      <Textarea
                        rows={4}
                        value={settingsForm.homeAboutBody}
                        onChange={(e) =>
                          updateSettingField("homeAboutBody", e.target.value)
                        }
                      />
                    </Field>
                  </div>
                </FormSection>

                <FormSection title="Hinh anh va badge">
                  <div className="grid grid-cols-1 gap-4">
                    <Field label="URL hinh">
                      <Input
                        value={settingsForm.homeAboutImageUrl}
                        onChange={(e) =>
                          updateSettingField("homeAboutImageUrl", e.target.value)
                        }
                      />
                    </Field>
                    <Field label="So nam kinh nghiem">
                      <Input
                        value={settingsForm.homeAboutExperienceYears}
                        onChange={(e) =>
                          updateSettingField(
                            "homeAboutExperienceYears",
                            e.target.value,
                          )
                        }
                      />
                    </Field>
                    <Field label="Label badge kinh nghiem">
                      <Textarea
                        rows={3}
                        value={settingsForm.homeAboutExperienceLabel}
                        onChange={(e) =>
                          updateSettingField(
                            "homeAboutExperienceLabel",
                            e.target.value,
                          )
                        }
                      />
                    </Field>
                  </div>
                </FormSection>

                <div className="xl:col-span-2">
                  <FormSection title="Bullet noi dung">
                    <div className="space-y-3">
                      {aboutPoints.map((point, index) => (
                        <div key={`about-point-${index}`} className="flex gap-3">
                          <Input
                            value={point}
                            onChange={(e) =>
                              setAboutPoints((prev) =>
                                prev.map((item, itemIndex) =>
                                  itemIndex === index ? e.target.value : item,
                                ),
                              )
                            }
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setAboutPoints((prev) =>
                                prev.filter((_, itemIndex) => itemIndex !== index),
                              )
                            }
                            className="rounded-xl border border-red-200 px-3 text-red-600 transition hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                      <AddRowButton
                        label="Them bullet"
                        onClick={() => setAboutPoints((prev) => [...prev, ""])}
                      />
                    </div>
                  </FormSection>
                </div>
              </div>

              <FormSection title="Preview block gioi thieu">
                <AboutPreviewCard settings={settingsForm} aboutPoints={aboutPoints} />
              </FormSection>
            </div>
          </SettingsScreen>
        );

      case "settings-commitments":
        return (
          <SettingsScreen
            title="Cam ket homepage"
            desc="Quan ly tung cam ket theo the rieng, thay vi nhap mot khoi JSON lon."
            savedAt={settingsSavedAt}
            isSaving={updateSiteSettings.isPending}
            onSave={saveSettings}
            primaryLabel="Luu cam ket"
          >
            <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1.55fr)_420px]">
              <div className="space-y-4">
                {commitments.map((item, index) => (
                  <RepeatCard
                    key={`commitment-${index}`}
                    title={`Cam ket ${index + 1}`}
                    onRemove={
                      commitments.length > 1
                        ? () =>
                            setCommitments((prev) =>
                              prev.filter((_, itemIndex) => itemIndex !== index),
                            )
                        : undefined
                    }
                  >
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                      <Field label="ID">
                        <Input
                          value={String(item.id)}
                          onChange={(e) =>
                            setCommitments((prev) =>
                              prev.map((row, rowIndex) =>
                                rowIndex === index
                                  ? { ...row, id: Number(e.target.value) || 0 }
                                  : row,
                              ),
                            )
                          }
                        />
                      </Field>
                      <Field label="Icon">
                        <Input
                          value={item.icon}
                          onChange={(e) =>
                            setCommitments((prev) =>
                              prev.map((row, rowIndex) =>
                                rowIndex === index
                                  ? { ...row, icon: e.target.value }
                                  : row,
                              ),
                            )
                          }
                          placeholder="shield, users, award..."
                        />
                      </Field>
                      <Field label="Tieu de">
                        <Input
                          value={item.title}
                          onChange={(e) =>
                            setCommitments((prev) =>
                              prev.map((row, rowIndex) =>
                                rowIndex === index
                                  ? { ...row, title: e.target.value }
                                  : row,
                              ),
                            )
                          }
                        />
                      </Field>
                      <div className="xl:col-span-3">
                        <Field label="Mo ta">
                          <Textarea
                            rows={4}
                            value={item.desc}
                            onChange={(e) =>
                              setCommitments((prev) =>
                                prev.map((row, rowIndex) =>
                                  rowIndex === index
                                    ? { ...row, desc: e.target.value }
                                    : row,
                                ),
                              )
                            }
                          />
                        </Field>
                      </div>
                    </div>
                  </RepeatCard>
                ))}
                <AddRowButton
                  label="Them cam ket"
                  onClick={() =>
                    setCommitments((prev) => [
                      ...prev,
                      {
                        id: prev.length + 1,
                        icon: "shield",
                        title: "",
                        desc: "",
                      },
                    ])
                  }
                />
              </div>

              <FormSection title="Preview cam ket">
                <CommitmentsPreviewCard items={commitments} />
              </FormSection>
            </div>
          </SettingsScreen>
        );

      case "settings-pricing":
        return (
          <SettingsScreen
            title="Bang bao gia homepage"
            desc="Sua tung goi bao gia theo form, moi tinh nang mot dong de de nhap lieu."
            savedAt={settingsSavedAt}
            isSaving={updateSiteSettings.isPending}
            onSave={saveSettings}
            primaryLabel="Luu bang bao gia"
          >
            <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1.55fr)_420px]">
              <div className="space-y-4">
                {pricingItems.map((item, index) => (
                  <RepeatCard
                    key={`pricing-${index}`}
                    title={`Goi bao gia ${index + 1}`}
                    onRemove={
                      pricingItems.length > 1
                        ? () =>
                            setPricingItems((prev) =>
                              prev.filter((_, itemIndex) => itemIndex !== index),
                            )
                        : undefined
                    }
                  >
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                      <Field label="ID">
                        <Input
                          value={item.id}
                          onChange={(e) =>
                            setPricingItems((prev) =>
                              prev.map((row, rowIndex) =>
                                rowIndex === index
                                  ? { ...row, id: e.target.value }
                                  : row,
                              ),
                            )
                          }
                        />
                      </Field>
                      <Field label="Ten goi">
                        <Input
                          value={item.name}
                          onChange={(e) =>
                            setPricingItems((prev) =>
                              prev.map((row, rowIndex) =>
                                rowIndex === index
                                  ? { ...row, name: e.target.value }
                                  : row,
                              ),
                            )
                          }
                        />
                      </Field>
                      <Field label="Gia tu">
                        <Input
                          value={item.priceFrom}
                          onChange={(e) =>
                            setPricingItems((prev) =>
                              prev.map((row, rowIndex) =>
                                rowIndex === index
                                  ? { ...row, priceFrom: e.target.value }
                                  : row,
                              ),
                            )
                          }
                        />
                      </Field>
                      <Field label="Gia den">
                        <Input
                          value={item.priceTo}
                          onChange={(e) =>
                            setPricingItems((prev) =>
                              prev.map((row, rowIndex) =>
                                rowIndex === index
                                  ? { ...row, priceTo: e.target.value }
                                  : row,
                              ),
                            )
                          }
                        />
                      </Field>
                      <Field label="Don vi">
                        <Input
                          value={item.unit}
                          onChange={(e) =>
                            setPricingItems((prev) =>
                              prev.map((row, rowIndex) =>
                                rowIndex === index
                                  ? { ...row, unit: e.target.value }
                                  : row,
                              ),
                            )
                          }
                        />
                      </Field>
                      <Field label="Nut CTA">
                        <Input
                          value={item.ctaLabel}
                          onChange={(e) =>
                            setPricingItems((prev) =>
                              prev.map((row, rowIndex) =>
                                rowIndex === index
                                  ? { ...row, ctaLabel: e.target.value }
                                  : row,
                              ),
                            )
                          }
                        />
                      </Field>
                      <Field label="Link CTA">
                        <Input
                          value={item.ctaHref}
                          onChange={(e) =>
                            setPricingItems((prev) =>
                              prev.map((row, rowIndex) =>
                                rowIndex === index
                                  ? { ...row, ctaHref: e.target.value }
                                  : row,
                              ),
                            )
                          }
                        />
                      </Field>
                      <Field label="Noi bat">
                        <select
                          className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-[#17579d]"
                          value={item.highlighted ? "yes" : "no"}
                          onChange={(e) =>
                            setPricingItems((prev) =>
                              prev.map((row, rowIndex) =>
                                rowIndex === index
                                  ? { ...row, highlighted: e.target.value === "yes" }
                                  : row,
                              ),
                            )
                          }
                        >
                          <option value="no">Khong</option>
                          <option value="yes">Co</option>
                        </select>
                      </Field>
                      <div className="xl:col-span-2">
                        <Field label="Mo ta ngan">
                          <Textarea
                            rows={3}
                            value={item.note}
                            onChange={(e) =>
                              setPricingItems((prev) =>
                                prev.map((row, rowIndex) =>
                                  rowIndex === index
                                    ? { ...row, note: e.target.value }
                                    : row,
                                ),
                              )
                            }
                          />
                        </Field>
                      </div>
                      <div className="xl:col-span-2">
                        <Field label="Tinh nang (moi dong mot muc)">
                          <Textarea
                            rows={6}
                            value={item.features.join("\n")}
                            onChange={(e) =>
                              setPricingItems((prev) =>
                                prev.map((row, rowIndex) =>
                                  rowIndex === index
                                    ? {
                                        ...row,
                                        features: e.target.value
                                          .split("\n")
                                          .map((feature) => feature.trim())
                                          .filter(Boolean),
                                      }
                                    : row,
                                ),
                              )
                            }
                          />
                        </Field>
                      </div>
                    </div>
                  </RepeatCard>
                ))}
                <AddRowButton
                  label="Them goi bao gia"
                  onClick={() =>
                    setPricingItems((prev) => [
                      ...prev,
                      {
                        id: `goi-${prev.length + 1}`,
                        name: "",
                        priceFrom: "",
                        priceTo: "",
                        unit: "",
                        note: "",
                        features: [],
                        ctaHref: "/lien-he",
                        ctaLabel: "Nhan bao gia chi tiet",
                        highlighted: false,
                      },
                    ])
                  }
                />
              </div>

              <FormSection title="Preview bang bao gia">
                <PricingPreviewCard items={pricingItems} />
              </FormSection>
            </div>
          </SettingsScreen>
        );

      case "settings-calculator":
        return (
          <SettingsScreen
            title="Bang tinh gia homepage"
            desc="Day la sidebar cau hinh cho bo tinh chi phi. Hien tai admin cho sua cong thuc gia dang JSON de toan bo trang chu cap nhat theo."
            savedAt={settingsSavedAt}
            isSaving={updateSiteSettings.isPending}
            onSave={saveSettings}
            primaryLabel="Luu bang tinh gia"
          >
            <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1.55fr)_420px]">
              <FormSection
                title="Cong thuc va don gia"
                desc="Goi y: giu 2 nhom don gia phan tho / tron goi, bo sung ghi chu de giai thich nguoi dung. Sau nay co the tach tiep thanh UI chi tiet hon."
              >
                <Field label="Calculator config JSON">
                  <Textarea
                    rows={14}
                    value={settingsForm.homeCalculatorConfigJson}
                    onChange={(e) =>
                      updateSettingField("homeCalculatorConfigJson", e.target.value)
                    }
                  />
                </Field>
              </FormSection>

              <FormSection title="Preview bo tinh gia">
                <CalculatorPreviewCard configJson={settingsForm.homeCalculatorConfigJson} />
              </FormSection>
            </div>
          </SettingsScreen>
        );

      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-[#eef1f5] text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-[290px] shrink-0 border-r border-slate-800/40 bg-[#94621d] text-white xl:flex xl:flex-col">
          <div className="border-b border-white/10 px-6 py-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Sao Khue CMS
              </div>
              <div className="mt-3 text-2xl font-bold leading-tight">
                Quan tri website
              </div>
              <div className="mt-2 text-sm leading-6 text-white/70">
                Giao dien moi, giu nguyen ket noi du lieu voi trang chu hien tai.
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto px-3 py-5">
            <SidebarGroupBlock
              title="Bang dieu khien"
              icon={LayoutDashboard}
              open={expandedGroup.dashboard}
              onToggle={() => toggleGroup("dashboard")}
            >
              <SidebarButton
                active={view === "dashboard"}
                onClick={() => setView("dashboard")}
                icon={LayoutDashboard}
                label="Tong quan"
              />
            </SidebarGroupBlock>

            <SidebarGroupBlock
              title="Quan ly bai viet"
              icon={Newspaper}
              open={expandedGroup.posts}
              onToggle={() => toggleGroup("posts")}
            >
              <SidebarButton
                active={view === "posts"}
                onClick={() => setView("posts")}
                icon={FileText}
                label="Tat ca bai viet"
              />
            </SidebarGroupBlock>

            <SidebarGroupBlock
              title="Homepage"
              icon={ImagePlus}
              open={expandedGroup.homepage}
              onToggle={() => toggleGroup("homepage")}
            >
              <SidebarButton
                active={view === "settings-hero"}
                onClick={() => setView("settings-hero")}
                icon={ImagePlus}
                label="Slideshow / Hero"
              />
              <SidebarButton
                active={view === "settings-about"}
                onClick={() => setView("settings-about")}
                icon={Building2}
                label="Thong tin cong ty"
              />
              <SidebarButton
                active={view === "settings-commitments"}
                onClick={() => setView("settings-commitments")}
                icon={ShieldCheck}
                label="Cam ket"
              />
              <SidebarButton
                active={view === "settings-pricing"}
                onClick={() => setView("settings-pricing")}
                icon={Layers3}
                label="Bang bao gia"
              />
            </SidebarGroupBlock>

            <SidebarGroupBlock
              title="Cong cu tinh toan"
              icon={Calculator}
              open={expandedGroup.tools}
              onToggle={() => toggleGroup("tools")}
            >
              <SidebarButton
                active={view === "settings-calculator"}
                onClick={() => setView("settings-calculator")}
                icon={Calculator}
                label="Bang tinh gia"
              />
            </SidebarGroupBlock>

            <SidebarGroupBlock
              title="Thiet lap thong tin"
              icon={Settings2}
              open={expandedGroup.settings}
              onToggle={() => toggleGroup("settings")}
            >
              <SidebarButton
                active={view === "settings-general"}
                onClick={() => setView("settings-general")}
                icon={Globe}
                label="Thong tin website"
              />
            </SidebarGroupBlock>
          </div>

          <div className="border-t border-white/10 p-4">
            <a
              href="/"
              className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/15"
            >
              <PhoneCall size={16} />
              Ve trang chu
            </a>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="border-b border-slate-200 bg-white px-6 py-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm text-slate-500">Xin chao, {user?.firstName || user?.email || "Admin"}!</div>
                <div className="mt-1 text-3xl font-bold text-slate-900">
                  Administrator
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#17579d] hover:text-[#17579d]"
                >
                  <Globe size={16} />
                  Xem website
                </a>
                <button
                  onClick={logout}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#ef4444] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#dc2626]"
                >
                  <LogOut size={16} />
                  Dang xuat
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 xl:p-8">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

function SectionTitle({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">{desc}</p>
    </div>
  );
}

function StickyToolbar({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="sticky top-4 z-20 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      {children}
    </div>
  );
}

function ToolbarButton({
  icon: Icon,
  color,
  children,
  onClick,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  color: string;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition ${color}`}
    >
      <Icon size={16} />
      {children}
    </button>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">{children}</div>;
}

function FormSection({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h4 className="text-xl font-bold text-slate-900">{title}</h4>
        {desc && <p className="mt-1 text-sm leading-6 text-slate-500">{desc}</p>}
      </div>
      <div className="p-6">{children}</div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-semibold text-slate-700">{label}</div>
      {children}
    </label>
  );
}

function DashboardLinkCard({
  color,
  icon: Icon,
  title,
  desc,
  onClick,
}: {
  color: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-[#17579d] hover:shadow-sm"
    >
      <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-white ${color}`}>
        <Icon size={32} />
      </div>
      <div>
        <div className="text-xl font-bold text-slate-900">{title}</div>
        <div className="mt-2 text-sm leading-6 text-slate-500">{desc}</div>
      </div>
    </button>
  );
}

function SidebarGroupBlock({
  title,
  icon: Icon,
  open,
  onToggle,
  children,
}: {
  title: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-black/5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-base font-semibold transition hover:bg-white/5"
      >
        <span className="flex items-center gap-3">
          <Icon size={18} />
          {title}
        </span>
        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>
      {open && <div className="space-y-1 px-3 pb-3">{children}</div>}
    </div>
  );
}

function SidebarButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
        active
          ? "bg-[#1f7ae0] text-white shadow"
          : "text-white/85 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon size={16} />
      {label}
    </button>
  );
}

function SettingsScreen({
  title,
  desc,
  children,
  onSave,
  isSaving,
  savedAt,
  primaryLabel = "Luu thay doi",
}: {
  title: string;
  desc: string;
  children: ReactNode;
  onSave: () => void;
  isSaving: boolean;
  savedAt: number | null;
  primaryLabel?: string;
}) {
  return (
    <div className="space-y-6">
      <StickyToolbar>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#17579d]">
            Thiet lap giao dien
          </div>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">{desc}</p>
        </div>
        <div className="flex items-center gap-3">
          {savedAt && (
            <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
              Da luu luc {new Date(savedAt).toLocaleTimeString("vi-VN")}
            </span>
          )}
          <Button
            type="button"
            onClick={onSave}
            className="rounded-xl bg-[#16a34a] text-white hover:bg-[#15803d]"
            disabled={isSaving}
          >
            <Save size={16} className="mr-2" />
            {isSaving ? "Dang luu..." : primaryLabel}
          </Button>
        </div>
      </StickyToolbar>
      {children}
    </div>
  );
}

function RepeatCard({
  title,
  children,
  onRemove,
}: {
  title: string;
  children: ReactNode;
  onRemove?: () => void;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <h4 className="text-lg font-bold text-slate-900">{title}</h4>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="rounded-xl border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
          >
            Xoa
          </button>
        )}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function AddRowButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-xl border border-dashed border-[#17579d]/50 bg-[#eef6ff] px-4 py-3 text-sm font-semibold text-[#17579d] transition hover:bg-[#dcecff]"
    >
      <Plus size={16} />
      {label}
    </button>
  );
}

function PreviewShell({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#17579d]">
          <Eye size={14} />
          {label}
        </div>
        <div className="mt-2 text-lg font-bold text-slate-900">{title}</div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function EditorStatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "blue" | "emerald" | "amber" | "violet" | "rose";
}) {
  const toneClasses = {
    blue: "bg-[#eef6ff] text-[#17579d] border-[#bfdbfe]",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    violet: "bg-violet-50 text-violet-700 border-violet-200",
    rose: "bg-rose-50 text-rose-700 border-rose-200",
  };

  return (
    <div className={`rounded-2xl border p-4 ${toneClasses[tone]}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] opacity-80">
        {label}
      </div>
      <div className="mt-2 text-lg font-bold">{value}</div>
    </div>
  );
}

function PostPreviewCard({
  title,
  excerpt,
  content,
  imageUrl,
  category,
  subCategory,
  slug,
  readingMinutes,
}: {
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  subCategory: string;
  slug: string;
  readingMinutes: number;
}) {
  const bodyPreview = content.slice(0, 420).trim();

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <div className="relative h-52 overflow-hidden bg-slate-100">
          {imageUrl ? (
            <img src={imageUrl} alt={title || "Preview bai viet"} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-sm font-medium text-slate-500">
              Chua co hinh dai dien
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
              {category || "Danh muc"}
            </span>
            {subCategory ? (
              <span className="rounded-full bg-[#17579d]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                {subCategory}
              </span>
            ) : null}
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
              /{slug}
            </div>
            <h3 className="mt-2 line-clamp-2 text-2xl font-bold leading-tight">
              {title || "Tieu de bai viet"}
            </h3>
          </div>
        </div>
        <div className="space-y-4 p-5">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            <span>{readingMinutes} phut doc</span>
            <span>{new Date().toLocaleDateString("vi-VN")}</span>
          </div>
          <p className="text-sm leading-7 text-slate-600">
            {excerpt || "Tom tat bai viet se hien thi o day de ban theo doi nhanh giao dien ngoai trang."}
          </p>
          <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
            {bodyPreview || "Noi dung preview se hien thi tai day khi ban bat dau nhap bai viet."}
            {bodyPreview ? "..." : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

function SeoPreviewCard({
  title,
  description,
  slug,
  keywords,
  titleLength,
  descriptionLength,
}: {
  title: string;
  description: string;
  slug: string;
  keywords: string;
  titleLength: number;
  descriptionLength: number;
}) {
  return (
    <div className="space-y-4">
      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#17579d]">
          <Globe size={14} />
          Google preview
        </div>
        <div className="mt-4 text-2xl font-medium leading-tight text-[#1a0dab]">
          {title || "SEO title se hien thi tai day"}
        </div>
        <div className="mt-2 text-sm text-emerald-700">
          https://your-domain.com/bai-viet/{slug}
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description || "Meta description se hien thi tai day de ban canh chinh do dai va thong diep."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <EditorStatCard
          label="Do dai title"
          value={`${titleLength}/70`}
          tone={titleLength > 70 ? "rose" : "amber"}
        />
        <EditorStatCard
          label="Do dai description"
          value={`${descriptionLength}/160`}
          tone={descriptionLength > 160 ? "rose" : "emerald"}
        />
      </div>

      <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600">
        <span className="font-semibold text-slate-900">Keywords:</span>{" "}
        {keywords || "Chua nhap keywords"}
      </div>
    </div>
  );
}

function HintActionButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-[#17579d] hover:bg-[#eef6ff] hover:text-[#17579d]"
    >
      {label}
    </button>
  );
}

function FieldHint({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="mt-2 text-xs leading-5 text-slate-500">{children}</div>;
}

function ChecklistCard({
  items,
}: {
  items: Array<{ label: string; done: boolean }>;
}) {
  const completed = items.filter((item) => item.done).length;

  return (
    <div className="space-y-4">
      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#17579d]">
              Trang thai bai viet
            </div>
            <div className="mt-2 text-lg font-bold text-slate-900">
              {completed}/{items.length} muc da san sang
            </div>
          </div>
          <div className="rounded-full bg-[#eef6ff] px-3 py-2 text-sm font-semibold text-[#17579d]">
            {Math.round((completed / items.length) * 100)}%
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {items.map((item, index) => (
            <div
              key={`checklist-${index}`}
              className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm ${
                item.done
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-slate-50 text-slate-600"
              }`}
            >
              <span className="font-medium">{item.label}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                {item.done ? "On" : "Thieu"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GeneralPreviewCard({
  settings,
}: {
  settings: ExtendedSiteSettingsInput;
}) {
  const mainLogo = settings.logoUrl || "/favicon.svg";
  const loadingLogo = settings.loadingLogoUrl || mainLogo;

  return (
    <div className="space-y-5">
      <PreviewShell label="Brand" title="Nhan dien website">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Logo / Favicon
            </div>
            <div className="mt-4 flex h-24 items-center justify-center rounded-2xl bg-white shadow-sm">
              <img
                src={mainLogo}
                alt={settings.companyName}
                className="max-h-16 max-w-[180px] object-contain"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Loading logo
            </div>
            <div className="mt-4 flex h-24 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-[#17579d] shadow-sm">
              <img
                src={loadingLogo}
                alt={`${settings.companyName} loading`}
                className="max-h-16 max-w-[160px] object-contain"
              />
            </div>
          </div>
        </div>
      </PreviewShell>

      <PreviewShell label="Header" title={settings.companyName || "Ten cong ty"}>
        <div className="rounded-[24px] border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-slate-500">Hotline</div>
              <div className="mt-1 text-xl font-bold text-[#17579d]">
                {settings.hotline1 || "Chua nhap hotline"}
              </div>
            </div>
            <div className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
              {settings.workingHours || "Gio lam viec"}
            </div>
          </div>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            <div>{settings.address1 || "Chua nhap dia chi"}</div>
            <div>{settings.email || "Chua nhap email"}</div>
            {settings.homeVideoUrl ? (
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#17579d]/15 bg-[#17579d]/5 px-3 py-2 font-semibold text-[#17579d]">
                <PlayCircle size={16} />
                {settings.homeVideoLabel || "Xem video"}
              </div>
            ) : null}
          </div>
        </div>
      </PreviewShell>
    </div>
  );
}

function HeroPreviewCard({
  slides,
  videoLabel,
  hasVideo,
}: {
  slides: HeroSlide[];
  videoLabel: string;
  hasVideo: boolean;
}) {
  const slide = slides[0] ?? defaultHeroSlides[0];

  return (
    <PreviewShell label="Homepage" title="Hero section">
      <div className="overflow-hidden rounded-[28px] bg-slate-950">
        <div className="relative min-h-[420px] overflow-hidden">
          <img
            src={slide.image || "/images/hero-bg.jpg"}
            alt={slide.title || "Hero"}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
          <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-6 text-white">
            <div className="mb-3 inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/80 backdrop-blur">
              {slide.subtitle || "Uy tin - chat luong - tan tam"}
            </div>
            <h3 className="max-w-xs text-3xl font-bold leading-tight">
              {slide.title || "Tieu de hero"}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/80">
              {slide.description || "Mo ta hero se hien thi o day."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full bg-[#17579d] px-5 py-3 text-sm font-semibold">
                Nhan tu van ngay
              </div>
              {hasVideo ? (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur">
                  <PlayCircle size={16} />
                  {videoLabel || "Xem video"}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function AboutPreviewCard({
  settings,
  aboutPoints,
}: {
  settings: ExtendedSiteSettingsInput;
  aboutPoints: string[];
}) {
  return (
    <PreviewShell label="Homepage" title="Thong tin cong ty">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
          <img
            src={settings.homeAboutImageUrl || "/images/about.png"}
            alt={settings.homeAboutTitle || "Thong tin cong ty"}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
            <div className="text-2xl font-bold text-[#17579d]">
              {settings.homeAboutExperienceYears || "10"}+
            </div>
            <div className="mt-1 max-w-[120px] whitespace-pre-line text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
              {settings.homeAboutExperienceLabel || "Nam kinh nghiem"}
            </div>
          </div>
        </div>
        <div className="space-y-4 p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#17579d]">
            {settings.homeAboutEyebrow || "Ve chung toi"}
          </div>
          <h3 className="text-2xl font-bold leading-tight text-slate-900">
            {settings.homeAboutTitle || "Tieu de block gioi thieu"}
          </h3>
          <p className="text-sm leading-7 text-slate-600">
            {settings.homeAboutIntro || "Doan mo ta mo rong se hien thi tai day."}
          </p>
          <div className="space-y-2">
            {aboutPoints.filter(Boolean).slice(0, 4).map((point, index) => (
              <div
                key={`about-preview-${index}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function CommitmentsPreviewCard({
  items,
}: {
  items: CommitmentItem[];
}) {
  return (
    <PreviewShell label="Homepage" title="Cam ket noi bat">
      <div className="grid gap-4">
        {items.slice(0, 4).map((item, index) => (
          <div
            key={`commitment-preview-${index}`}
            className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm"
          >
            <div className="mb-3 inline-flex rounded-full bg-[#17579d]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#17579d]">
              {item.icon || "shield"}
            </div>
            <div className="text-lg font-bold text-slate-900">
              {item.title || `Cam ket ${index + 1}`}
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {item.desc || "Mo ta cam ket se hien thi o day."}
            </p>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

function PricingPreviewCard({
  items,
}: {
  items: PricingItem[];
}) {
  return (
    <PreviewShell label="Homepage" title="Bang bao gia">
      <div className="space-y-4">
        {items.slice(0, 3).map((item, index) => (
          <div
            key={`pricing-preview-${index}`}
            className={`rounded-[28px] border p-5 shadow-sm transition ${
              item.highlighted
                ? "border-[#17579d] bg-[#17579d] text-white"
                : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] opacity-80">
                  {item.id || "goi"}
                </div>
                <div className="mt-2 text-xl font-bold">{item.name || "Ten goi"}</div>
              </div>
              {item.highlighted ? (
                <div className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]">
                  Noi bat
                </div>
              ) : null}
            </div>
            <div className="mt-4 text-3xl font-bold">
              {item.priceFrom || "..."}
              {item.priceTo ? ` - ${item.priceTo}` : ""}
            </div>
            <div className="mt-1 text-sm opacity-80">{item.unit || "/m2"}</div>
            <p className="mt-4 text-sm leading-7 opacity-85">
              {item.note || "Mo ta ngan cua goi bao gia."}
            </p>
            <div className="mt-4 space-y-2">
              {item.features.slice(0, 4).map((feature, featureIndex) => (
                <div
                  key={`pricing-feature-${featureIndex}`}
                  className={`rounded-2xl px-3 py-2 text-sm ${
                    item.highlighted ? "bg-white/10" : "bg-slate-50"
                  }`}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

function CalculatorPreviewCard({
  configJson,
}: {
  configJson: string;
}) {
  const fallback = {
    phanThoRates: { "trung-binh": 3550000, "tb-kha": 3700000, kha: 3800000 },
    tronGoiRates: { "trung-binh": 4850000, "tb-kha": 5500000, kha: 6700000 },
    note: "",
  };
  const config = parseJsonObject(configJson, fallback);
  const phanThoRates = Object.entries(config.phanThoRates ?? {});
  const tronGoiRates = Object.entries(config.tronGoiRates ?? {});

  return (
    <PreviewShell label="Homepage" title="Bo tinh gia">
      <div className="space-y-4">
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#17579d]">
            Phan tho
          </div>
          <div className="mt-4 space-y-3">
            {phanThoRates.map(([key, value]) => (
              <div
                key={`phan-tho-${key}`}
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm"
              >
                <span className="font-semibold uppercase text-slate-600">{key}</span>
                <span className="font-bold text-slate-900">
                  {Number(value).toLocaleString("vi-VN")} VND
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Tron goi
          </div>
          <div className="mt-4 space-y-3">
            {tronGoiRates.map(([key, value]) => (
              <div
                key={`tron-goi-${key}`}
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm"
              >
                <span className="font-semibold uppercase text-slate-600">{key}</span>
                <span className="font-bold text-slate-900">
                  {Number(value).toLocaleString("vi-VN")} VND
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600">
          {config.note || "Ghi chu tinh gia se hien thi tai day."}
        </div>
      </div>
    </PreviewShell>
  );
}
