import { useState, useEffect } from "react";
import { useAuth } from "@workspace/replit-auth-web";
import {
  useListPosts,
  useCreatePost,
  useUpdatePost,
  useDeletePost,
  type Post,
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
            <Button onClick={() => { reset(); setShowForm(true); }} className="bg-primary text-white">
              <Plus size={16} className="mr-1" /> Thêm bài viết
            </Button>
            <Button variant="outline" onClick={logout}>
              <LogOut size={16} className="mr-1" /> Đăng xuất
            </Button>
          </div>
        </div>

        {showForm && (
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
      </div>
      <Footer />
    </div>
  );
}
