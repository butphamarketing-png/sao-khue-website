import { useEffect, useState } from "react";
import { Trash2, Plus, GripVertical } from "lucide-react";
import type { Post } from "@workspace/api-client-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  defaultFeaturedPosts,
  defaultPageBanners,
  type FeaturedPostsConfig,
  type PageBannersMap,
} from "@/lib/home-content";
import { defaultNavMenu, type MenuItem } from "@/lib/menu";
import {
  deleteContactLead,
  fetchContactLeads,
  type ContactLead,
} from "@/lib/contact-leads-api";
import { exportLeadsToCsv } from "@/lib/admin-leads-export";
import { Field, FormSection, RepeatCard } from "./admin-ui";

export function NavMenuEditor({
  menu,
  setMenu,
}: {
  menu: MenuItem[];
  setMenu: (m: MenuItem[]) => void;
}) {
  function updateTop(index: number, patch: Partial<MenuItem>) {
    setMenu(menu.map((item, i) => (i === index ? { ...item, ...patch } : item)));
  }

  function updateChild(topIndex: number, childIndex: number, patch: Partial<MenuItem>) {
    setMenu(
      menu.map((item, i) => {
        if (i !== topIndex || !item.children) return item;
        return {
          ...item,
          children: item.children.map((c, j) => (j === childIndex ? { ...c, ...patch } : c)),
        };
      }),
    );
  }

  function addChild(topIndex: number) {
    const parent = menu[topIndex];
    if (!parent.category) return;
    setMenu(
      menu.map((item, i) =>
        i === topIndex
          ? {
              ...item,
              children: [
                ...(item.children ?? []),
                {
                  title: "Mục mới",
                  href: `${item.href}/muc-moi`,
                  category: item.category,
                },
              ],
            }
          : item,
      ),
    );
  }

  function removeChild(topIndex: number, childIndex: number) {
    setMenu(
      menu.map((item, i) => {
        if (i !== topIndex || !item.children) return item;
        return { ...item, children: item.children.filter((_, j) => j !== childIndex) };
      }),
    );
  }

  return (
    <div className="space-y-4">
      {menu.map((item, topIndex) => (
        <RepeatCard key={`${item.href}-${topIndex}`} title={item.title || "Menu item"}>
          <div className="grid gap-3 md:grid-cols-2">
            <Field label="Nhãn menu">
              <Input
                value={item.title}
                onChange={(e) => updateTop(topIndex, { title: e.target.value })}
              />
            </Field>
            <Field label="Đường dẫn (href)">
              <Input
                value={item.href}
                onChange={(e) => updateTop(topIndex, { href: e.target.value })}
              />
            </Field>
          </div>
          {item.children && (
            <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Menu con
              </div>
              {item.children.map((child, childIndex) => (
                <div
                  key={`${child.href}-${childIndex}`}
                  className="grid gap-2 rounded-xl border border-slate-100 bg-slate-50/80 p-3 md:grid-cols-[1fr_1fr_auto]"
                >
                  <Input
                    value={child.title}
                    onChange={(e) => updateChild(topIndex, childIndex, { title: e.target.value })}
                    placeholder="Tên"
                  />
                  <Input
                    value={child.href}
                    onChange={(e) => updateChild(topIndex, childIndex, { href: e.target.value })}
                    placeholder="/duong-dan"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeChild(topIndex, childIndex)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={() => addChild(topIndex)}>
                <Plus className="mr-2 h-4 w-4" />
                Thêm mục con
              </Button>
            </div>
          )}
        </RepeatCard>
      ))}
    </div>
  );
}

export function PageBannersEditor({
  banners,
  setBanners,
}: {
  banners: PageBannersMap;
  setBanners: (b: PageBannersMap) => void;
}) {
  const keys: (keyof PageBannersMap)[] = ["pricing", "thietKe", "xayMoi", "contact", "notFound"];
  const labels: Record<keyof PageBannersMap, string> = {
    pricing: "Trang /bao-gia",
    thietKe: "Trang /thiet-ke",
    xayMoi: "Trang /xay-moi",
    contact: "Trang /lien-he",
    notFound: "Trang 404",
  };

  function patch(key: keyof PageBannersMap, field: string, value: string) {
    setBanners({
      ...banners,
      [key]: { ...banners[key], [field]: value },
    });
  }

  return (
    <div className="space-y-4">
      {keys.map((key) => (
        <FormSection key={key} title={labels[key]}>
          <div className="grid gap-3">
            <Field label="Tiêu đề banner">
              <Input
                value={banners[key].title}
                onChange={(e) => patch(key, "title", e.target.value)}
              />
            </Field>
            <Field label="Mô tả ngắn (dưới tiêu đề)">
              <Textarea
                rows={2}
                value={banners[key].subtitle}
                onChange={(e) => patch(key, "subtitle", e.target.value)}
              />
            </Field>
            {key === "notFound" && (
              <>
                <Field label="Tiêu đề nội dung">
                  <Input
                    value={banners[key].bodyTitle ?? ""}
                    onChange={(e) => patch(key, "bodyTitle", e.target.value)}
                  />
                </Field>
                <Field label="Đoạn mô tả">
                  <Textarea
                    rows={2}
                    value={banners[key].bodyText ?? ""}
                    onChange={(e) => patch(key, "bodyText", e.target.value)}
                  />
                </Field>
              </>
            )}
          </div>
        </FormSection>
      ))}
    </div>
  );
}

function SlugPicker({
  label,
  slugs,
  posts,
  limit,
  onChange,
}: {
  label: string;
  slugs: string[];
  posts: Post[];
  limit: number;
  onChange: (slugs: string[]) => void;
}) {
  function toggle(slug: string) {
    if (slugs.includes(slug)) {
      onChange(slugs.filter((s) => s !== slug));
      return;
    }
    if (slugs.length >= limit) return;
    onChange([...slugs, slug]);
  }

  return (
    <FormSection title={label}>
      <p className="mb-3 text-sm text-slate-500">
        Chọn tối đa {limit} bài. Để trống = tự động lấy bài mới nhất.
      </p>
      <div className="max-h-64 space-y-2 overflow-y-auto rounded-xl border border-slate-100 p-3">
        {posts.map((post) => {
          const active = slugs.includes(post.slug);
          return (
            <button
              key={post.id}
              type="button"
              onClick={() => toggle(post.slug)}
              className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition ${
                active
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-slate-100 hover:border-slate-200"
              }`}
            >
              <GripVertical className="h-4 w-4 shrink-0 opacity-40" />
              <span className="flex-1 truncate font-medium">{post.title}</span>
              <span className="text-xs text-slate-400">{post.slug}</span>
            </button>
          );
        })}
        {posts.length === 0 && (
          <p className="text-sm text-slate-500">Chưa có bài viết trong danh mục này.</p>
        )}
      </div>
    </FormSection>
  );
}

export function FeaturedPostsEditor({
  config,
  setConfig,
  posts,
}: {
  config: FeaturedPostsConfig;
  setConfig: (c: FeaturedPostsConfig) => void;
  posts: Post[];
}) {
  const dichVu = posts.filter((p) => p.category === "dich-vu");
  const congTrinh = posts.filter((p) => p.category === "cong-trinh");
  const all = posts;

  return (
    <div className="space-y-6">
      <SlugPicker
        label="Dịch vụ trang chủ (tối đa 4)"
        slugs={config.services}
        posts={dichVu}
        limit={4}
        onChange={(services) => setConfig({ ...config, services })}
      />
      <SlugPicker
        label="Công trình trang chủ (tối đa 8)"
        slugs={config.projects}
        posts={congTrinh}
        limit={8}
        onChange={(projects) => setConfig({ ...config, projects })}
      />
      <SlugPicker
        label="Tin tức trang chủ (tối đa 6)"
        slugs={config.news}
        posts={all}
        limit={6}
        onChange={(news) => setConfig({ ...config, news })}
      />
    </div>
  );
}

type InboxPanelProps = {
  onLeadsLoaded?: (leads: ContactLead[]) => void;
};

export function ContactInboxPanel({ onLeadsLoaded }: InboxPanelProps) {
  const [leads, setLeads] = useState<ContactLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchContactLeads();
      setLeads(data);
      onLeadsLoaded?.(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Lỗi tải dữ liệu");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- load once on mount
  }, []);

  async function onDelete(id: number) {
    if (!confirm("Xóa liên hệ này?")) return;
    await deleteContactLead(id);
    setLeads((prev) => prev.filter((l) => l.id !== id));
  }

  if (loading) return <p className="text-sm text-slate-500">Đang tải...</p>;
  if (error) return <p className="text-sm text-red-600">{error}</p>;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-slate-600">{leads.length} yêu cầu liên hệ</p>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={!leads.length}
            onClick={() => exportLeadsToCsv(leads)}
          >
            Xuất CSV
          </Button>
          <Button type="button" variant="outline" size="sm" onClick={() => void load()}>
            Làm mới
          </Button>
        </div>
      </div>
      {leads.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-500">
          <p className="font-medium text-slate-700">Chưa có liên hệ nào từ form website.</p>
          <p className="mt-2 leading-relaxed">
            Hộp thư này chỉ lưu khách khi họ gửi form trên kientrucsaokhue.com (báo giá / liên hệ / landing Ads).
            Số liệu Google Ads, cuộc gọi điện thoại hay WordPress cũ <strong>không tự chuyển vào đây</strong>.
          </p>
        </div>
      ) : (
        leads.map((lead) => (
          <div
            key={lead.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="font-bold text-slate-900">{lead.name}</div>
                <div className="mt-1 text-sm text-primary">{lead.phone}</div>
                {lead.email && <div className="text-sm text-slate-600">{lead.email}</div>}
              </div>
              <div className="text-xs text-slate-400">
                {new Date(lead.createdAt).toLocaleString("vi-VN")}
              </div>
            </div>
            {lead.service && (
              <div className="mt-2 text-sm">
                <span className="font-semibold text-slate-700">Dịch vụ:</span> {lead.service}
              </div>
            )}
            {lead.message && (
              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                {lead.message}
              </p>
            )}
            <div className="mt-3 flex gap-2">
              <Button asChild size="sm" variant="outline">
                <a href={`tel:${lead.phone.replace(/\s+/g, "")}`}>Gọi</a>
              </Button>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="text-red-600"
                onClick={() => void onDelete(lead.id)}
              >
                <Trash2 className="mr-1 h-4 w-4" />
                Xóa
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export {
  defaultNavMenu,
  defaultPageBanners,
  defaultFeaturedPosts,
};
