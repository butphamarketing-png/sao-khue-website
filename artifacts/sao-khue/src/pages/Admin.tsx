import { useState, useEffect } from "react";
import { useAuth } from "@workspace/replit-auth-web";
import {
  useListPosts,
  useCreatePost,
  useUpdatePost,
  useDeletePost,
  useGetSiteSettings,
  useUpdateSiteSettings,
  type Post,
  type SiteSettingsInput,
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { navMenu } from "@/lib/menu";
import { Pencil, Trash2, Plus, LogOut } from "lucide-react";

const categoryOptions = navMenu
  .filter((m) => m.category)
  .map((m) => ({ value: m.category!, label: m.title }));

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

const empty: FormState = {
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

export default function Admin() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();
  const { data: posts, refetch } = useListPosts();
  const qc = useQueryClient();
  const create = useCreatePost();
  const update = useUpdatePost();
  const remove = useDeletePost();

  const [editing, setEditing] = useState<Post | null>(null);
  const [form, setForm] = useState<FormState>(empty);
  const [showForm, setShowForm] = useState(false);
  const [tab, setTab] = useState<"posts" | "settings">("posts");

  useEffect(() => {
    if (editing) {
      setForm({
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
      setShowForm(true);
    }
  }, [editing]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Đang tải...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50">
        <TopBar />
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow border p-8 text-center">
            <h1 className="text-2xl font-bold text-primary uppercase mb-2">Khu vực Admin</h1>
            <p className="text-slate-600 mb-6">Vui lòng đăng nhập để quản lý bài viết của website.</p>
            <Button onClick={login} className="bg-primary text-white w-full">
              Đăng nhập
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const reset = () => {
    setEditing(null);
    setForm(empty);
    setShowForm(false);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editing) {
        await update.mutateAsync({ slug: editing.slug, data: form });
      } else {
        await create.mutateAsync({ data: form });
      }
      await qc.invalidateQueries();
      await refetch();
      reset();
    } catch (err: unknown) {
      alert("Lỗi lưu bài viết: " + (err instanceof Error ? err.message : String(err)));
    }
  };

  const onDelete = async (slug: string) => {
    if (!confirm("Xoá bài viết này?")) return;
    await remove.mutateAsync({ slug });
    await qc.invalidateQueries();
    await refetch();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar />
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-primary uppercase">Quản trị bài viết</h1>
            <p className="text-sm text-slate-500">
              Xin chào, {user?.firstName || user?.email || "Admin"}
            </p>
          </div>
          <div className="flex gap-2">
            {tab === "posts" && (
              <Button onClick={() => { reset(); setShowForm(true); }} className="bg-primary text-white">
                <Plus size={16} className="mr-1" /> Thêm bài viết
              </Button>
            )}
            <Button variant="outline" onClick={logout}>
              <LogOut size={16} className="mr-1" /> Đăng xuất
            </Button>
          </div>
        </div>

        <div className="flex gap-2 border-b mb-6">
          <button
            onClick={() => setTab("posts")}
            className={`px-4 py-2 text-sm font-semibold border-b-2 -mb-px transition-colors ${tab === "posts" ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-800"}`}
          >
            Bài viết
          </button>
          <button
            onClick={() => setTab("settings")}
            className={`px-4 py-2 text-sm font-semibold border-b-2 -mb-px transition-colors ${tab === "settings" ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-800"}`}
          >
            Cài đặt website
          </button>
        </div>

        {tab === "settings" && <SettingsPanel />}

        {tab === "posts" && showForm && (
          <form onSubmit={onSubmit} className="bg-white rounded-lg border shadow-sm p-6 mb-8 space-y-4">
            <h2 className="text-lg font-bold">{editing ? "Sửa bài viết" : "Thêm bài viết mới"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">Tiêu đề *</label>
                <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Slug (URL) *</label>
                <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required disabled={!!editing} placeholder="vi-du-bai-viet" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Danh mục *</label>
                <select className="w-full border rounded px-3 py-2 text-sm" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                  {categoryOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Ảnh đại diện (URL)</label>
                <Input value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} placeholder="https://..." />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Tóm tắt</label>
              <Textarea rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Nội dung (HTML hoặc văn bản)</label>
              <Textarea rows={12} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
            </div>

            <div className="border-t pt-4 mt-2">
              <h3 className="text-base font-bold text-primary mb-3 uppercase">SEO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium block mb-1">Meta Title (tiêu đề SEO)</label>
                  <Input value={form.metaTitle} onChange={(e) => setForm({ ...form, metaTitle: e.target.value })} placeholder="Để trống sẽ dùng tiêu đề bài viết" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium block mb-1">Meta Description (mô tả SEO)</label>
                  <Textarea rows={2} value={form.metaDescription} onChange={(e) => setForm({ ...form, metaDescription: e.target.value })} placeholder="Mô tả ngắn cho công cụ tìm kiếm (~160 ký tự)" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium block mb-1">Từ khoá (Meta Keywords)</label>
                  <Input value={form.metaKeywords} onChange={(e) => setForm({ ...form, metaKeywords: e.target.value })} placeholder="từ khoá 1, từ khoá 2, ..." />
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" onClick={reset}>Huỷ</Button>
              <Button type="submit" className="bg-primary text-white" disabled={create.isPending || update.isPending}>
                {editing ? "Cập nhật" : "Đăng bài"}
              </Button>
            </div>
          </form>
        )}

        {tab === "posts" && (
        <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-left">
              <tr>
                <th className="p-3">Tiêu đề</th>
                <th className="p-3">Danh mục</th>
                <th className="p-3">Ngày tạo</th>
                <th className="p-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {(posts ?? []).map((p) => (
                <tr key={p.id} className="border-t hover:bg-slate-50">
                  <td className="p-3 font-medium">{p.title}<div className="text-xs text-slate-400">/{p.slug}</div></td>
                  <td className="p-3"><span className="bg-slate-100 px-2 py-1 rounded text-xs">{p.category}</span></td>
                  <td className="p-3 text-slate-500">{new Date(p.createdAt).toLocaleDateString("vi-VN")}</td>
                  <td className="p-3 text-right space-x-2">
                    <button onClick={() => setEditing(p)} className="inline-flex items-center text-primary hover:underline"><Pencil size={14} /></button>
                    <button onClick={() => onDelete(p.slug)} className="inline-flex items-center text-red-600 hover:underline"><Trash2 size={14} /></button>
                  </td>
                </tr>
              ))}
              {(posts ?? []).length === 0 && (
                <tr><td colSpan={4} className="p-6 text-center text-slate-500">Chưa có bài viết nào.</td></tr>
              )}
            </tbody>
          </table>
        </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function SettingsPanel() {
  const { data, refetch } = useGetSiteSettings();
  const update = useUpdateSiteSettings();
  const [f, setF] = useState<SiteSettingsInput | null>(null);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  useEffect(() => {
    if (data && !f) {
      const { id: _id, ...rest } = data;
      setF(rest);
    }
  }, [data, f]);

  if (!f) return <div className="bg-white rounded-lg border p-6 text-slate-500">Đang tải cài đặt...</div>;

  const set = <K extends keyof SiteSettingsInput>(k: K, v: SiteSettingsInput[K]) => setF({ ...f, [k]: v });

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await update.mutateAsync({ data: f });
      await refetch();
      setSavedAt(Date.now());
    } catch (err: unknown) {
      alert("Lỗi lưu cài đặt: " + (err instanceof Error ? err.message : String(err)));
    }
  };

  const fields: Array<{ key: keyof SiteSettingsInput; label: string; placeholder?: string; long?: boolean; full?: boolean }> = [
    { key: "companyName", label: "Tên công ty", full: true },
    { key: "taxCode", label: "Mã số thuế" },
    { key: "logoUrl", label: "URL Logo", full: true },
    { key: "hotline1", label: "Hotline chính" },
    { key: "hotline2", label: "Hotline phụ" },
    { key: "email", label: "Email" },
    { key: "workingHours", label: "Giờ làm việc", placeholder: "8:00 - 17:30" },
    { key: "address1", label: "Địa chỉ trụ sở", full: true },
    { key: "address2", label: "Địa chỉ văn phòng", full: true },
    { key: "facebookUrl", label: "Facebook URL" },
    { key: "youtubeUrl", label: "Youtube URL" },
    { key: "instagramUrl", label: "Instagram URL" },
    { key: "zaloPhone", label: "Số Zalo (chỉ số)", placeholder: "0936045268" },
    { key: "messengerUrl", label: "Messenger URL", placeholder: "https://m.me/..." },
    { key: "footerDescription", label: "Mô tả ở footer", full: true, long: true },
  ];

  return (
    <form onSubmit={onSave} className="bg-white rounded-lg border shadow-sm p-6 space-y-4">
      <h2 className="text-lg font-bold mb-2">Thông tin chung của website</h2>
      <p className="text-sm text-slate-500 mb-4">Các thông tin này sẽ hiển thị ở thanh trên cùng, chân trang, các nút Zalo/Messenger/Hotline và mục Liên hệ trên toàn bộ website.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((fld) => (
          <div key={fld.key} className={fld.full ? "md:col-span-2" : ""}>
            <label className="text-sm font-medium block mb-1">{fld.label}</label>
            {fld.long ? (
              <Textarea rows={3} value={(f[fld.key] ?? "") as string} onChange={(e) => set(fld.key, e.target.value)} placeholder={fld.placeholder} />
            ) : (
              <Input value={(f[fld.key] ?? "") as string} onChange={(e) => set(fld.key, e.target.value)} placeholder={fld.placeholder} />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-3 pt-2">
        {savedAt && <span className="text-sm text-green-600">Đã lưu lúc {new Date(savedAt).toLocaleTimeString("vi-VN")}</span>}
        <Button type="submit" className="bg-primary text-white" disabled={update.isPending}>
          {update.isPending ? "Đang lưu..." : "Lưu thay đổi"}
        </Button>
      </div>
    </form>
  );
}
