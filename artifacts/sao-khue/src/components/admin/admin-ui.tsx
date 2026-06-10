import type { ComponentType, ReactNode } from "react";
import { ChevronDown, ChevronRight, Eye, Plus, RotateCcw, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

const BP_GRADIENT = "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)";

export function SectionTitle({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-violet-100/80 bg-white p-6 shadow-sm shadow-violet-500/5 md:p-8">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #c4b5fd, transparent 70%)" }}
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-700"
            style={{ background: "#f5f3ff", border: "1px solid #ede9fe" }}
          >
            Bứt Phá · Sao Khuê CMS
          </span>
        </div>
        <h1 className="mt-3 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">{title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

export function AdminStatCard({
  label,
  value,
  icon: Icon,
  accent = "violet",
}: {
  label: string;
  value: number | string;
  icon: ComponentType<{ size?: number; className?: string }>;
  accent?: "violet" | "indigo" | "fuchsia" | "purple";
}) {
  const gradients = {
    violet: "from-violet-600 to-violet-700",
    indigo: "from-indigo-600 to-violet-700",
    fuchsia: "from-fuchsia-600 to-violet-700",
    purple: "from-purple-600 to-indigo-700",
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-violet-100/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10">
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)" }}
      />
      <div className="relative flex items-center gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg shadow-violet-500/25 ${gradients[accent]}`}
        >
          <Icon size={26} />
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</div>
          <div className="mt-1 text-3xl font-black tabular-nums text-slate-900">{value}</div>
        </div>
      </div>
    </div>
  );
}

export function StickyToolbar({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-4 z-20 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-violet-100/80 bg-white/95 px-5 py-4 shadow-md shadow-violet-500/5 backdrop-blur-sm">
      {children}
    </div>
  );
}

export function ToolbarButton({
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
      className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 ${color}`}
    >
      <Icon size={16} />
      {children}
    </button>
  );
}

export function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-violet-100/60 bg-white shadow-sm shadow-violet-500/5">
      {children}
    </div>
  );
}

export function FormSection({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-violet-100/60 bg-white shadow-sm">
      <div className="border-b border-violet-50 bg-gradient-to-r from-violet-50/50 to-white px-6 py-4">
        <h4 className="text-lg font-bold text-slate-900">{title}</h4>
        {desc && <p className="mt-1 text-sm leading-relaxed text-slate-500">{desc}</p>}
      </div>
      <div className="p-6">{children}</div>
    </section>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-semibold text-slate-700">{label}</div>
      {children}
    </label>
  );
}

export function DashboardLinkCard({
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
      className="group flex items-center gap-4 rounded-2xl border border-violet-100/80 bg-white p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/50 hover:shadow-lg hover:shadow-violet-500/10"
    >
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg shadow-violet-500/20 transition group-hover:scale-105 ${color}`}
      >
        <Icon size={24} />
      </div>
      <div>
        <div className="text-base font-bold text-slate-900 group-hover:text-violet-700">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-slate-500">{desc}</div>
      </div>
      <ChevronRight
        size={18}
        className="ml-auto shrink-0 text-violet-300 opacity-0 transition group-hover:opacity-100"
      />
    </button>
  );
}

export function SidebarGroupBlock({
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
    <div className="rounded-xl bg-white/5 ring-1 ring-white/5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold transition hover:bg-white/5"
      >
        <span className="flex items-center gap-3 text-white/90">
          <Icon size={17} />
          {title}
        </span>
        {open ? <ChevronDown size={16} className="text-white/60" /> : <ChevronRight size={16} className="text-white/60" />}
      </button>
      {open && <div className="space-y-1 px-2 pb-2">{children}</div>}
    </div>
  );
}

export function SidebarButton({
  active,
  onClick,
  icon: Icon,
  label,
  badge,
}: {
  active: boolean;
  onClick: () => void;
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  badge?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
        active
          ? "bg-white/15 text-white shadow-sm ring-1 ring-white/20"
          : "text-white/75 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon size={15} />
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {badge != null && badge > 0 ? (
        <span className="shrink-0 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white">
          {badge > 99 ? "99+" : badge}
        </span>
      ) : null}
    </button>
  );
}

export function SettingsScreen({
  title,
  desc,
  children,
  onSave,
  onRestoreDefaults,
  isSaving,
  savedAt,
  primaryLabel = "Lưu thay đổi",
  hideSave = false,
}: {
  title: string;
  desc: string;
  children: ReactNode;
  onSave: () => void;
  onRestoreDefaults?: () => void;
  isSaving: boolean;
  savedAt: number | null;
  primaryLabel?: string;
  hideSave?: boolean;
}) {
  return (
    <div className="space-y-6">
      <StickyToolbar>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Thiết lập giao diện</div>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">{desc}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {savedAt && (
            <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
              Đã lưu lúc {new Date(savedAt).toLocaleTimeString("vi-VN")}
            </span>
          )}
          {onRestoreDefaults && (
            <Button
              type="button"
              variant="outline"
              onClick={onRestoreDefaults}
              className="rounded-xl border-slate-200"
              disabled={isSaving}
            >
              <RotateCcw size={16} className="mr-2" />
              Khôi phục mặc định
            </Button>
          )}
          {!hideSave && (
            <Button
              type="button"
              onClick={onSave}
              className="rounded-xl border-0 text-white hover:opacity-90"
              style={{ background: BP_GRADIENT }}
              disabled={isSaving}
            >
              <Save size={16} className="mr-2" />
              {isSaving ? "Đang lưu..." : primaryLabel}
            </Button>
          )}
        </div>
      </StickyToolbar>
      {children}
    </div>
  );
}

export function RepeatCard({
  title,
  children,
  onRemove,
}: {
  title: string;
  children: ReactNode;
  onRemove?: () => void;
}) {
  return (
    <div className="rounded-2xl border border-violet-100/60 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-violet-50 px-6 py-4">
        <h4 className="text-lg font-bold text-slate-900">{title}</h4>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="rounded-lg border border-red-200 px-3 py-1.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            Xóa
          </button>
        )}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

export function AddRowButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-xl border border-dashed border-violet-300/50 bg-violet-50/50 px-4 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
    >
      <Plus size={16} />
      {label}
    </button>
  );
}

export function PreviewShell({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-violet-100/60 bg-white shadow-lg shadow-violet-500/5">
      <div className="border-b border-violet-50 bg-gradient-to-r from-violet-50/60 to-white px-5 py-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-violet-600">
          <Eye size={14} />
          {label}
        </div>
        <div className="mt-1.5 text-lg font-bold text-slate-900">{title}</div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function EditorStatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "blue" | "emerald" | "amber" | "violet" | "rose";
}) {
  const toneClasses = {
    blue: "bg-violet-50 text-violet-700 border-violet-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    violet: "bg-violet-50 text-violet-700 border-violet-200",
    rose: "bg-rose-50 text-rose-700 border-rose-200",
  };

  return (
    <div className={`rounded-xl border p-4 ${toneClasses[tone]}`}>
      <div className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">{label}</div>
      <div className="mt-1.5 text-lg font-bold">{value}</div>
    </div>
  );
}

export function HintActionButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-violet-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
    >
      {label}
    </button>
  );
}

export function FieldHint({ children }: { children: ReactNode }) {
  return <div className="mt-2 text-xs leading-relaxed text-slate-500">{children}</div>;
}

export function ChecklistCard({
  items,
}: {
  items: Array<{ label: string; done: boolean; warn?: boolean }>;
}) {
  const completed = items.filter((item) => item.done).length;
  const warned = items.filter((item) => item.warn && !item.done).length;

  return (
    <div className="rounded-2xl border border-violet-100/60 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600">
            Trạng thái bài viết
          </div>
          <div className="mt-1.5 text-lg font-bold text-slate-900">
            {completed}/{items.length} tiêu chí đạt
            {warned > 0 ? (
              <span className="ml-1 text-sm font-semibold text-amber-600">· {warned} cảnh báo</span>
            ) : null}
          </div>
        </div>
        <div className="rounded-full bg-violet-100 px-3 py-2 text-sm font-bold text-violet-700">
          {items.length ? Math.round((completed / items.length) * 100) : 0}%
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {items.map((item, index) => (
          <div
            key={`checklist-${index}`}
            className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm ${
              item.done
                ? "bg-emerald-50 text-emerald-700"
                : item.warn
                  ? "bg-amber-50 text-amber-800"
                  : "bg-slate-50 text-slate-600"
            }`}
          >
            <span className="font-medium">{item.label}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">
              {item.done ? "OK" : item.warn ? "Cảnh báo" : "Chưa đạt"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
