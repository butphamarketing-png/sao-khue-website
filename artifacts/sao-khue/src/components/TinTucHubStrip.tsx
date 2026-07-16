import { Link } from "wouter";
import { TIN_TUC_MAIN_HUBS } from "@workspace/seed-content";

export function TinTucHubStrip() {
  return (
    <section className="site-container pb-6">
      <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5 md:p-6">
        <h2 className="text-lg font-bold text-primary">Trụ cột nội dung — bắt đầu từ đây</h2>
        <p className="mt-1 text-sm text-slate-600">
          Các bài hub tổng hợp quy trình, báo giá và kinh nghiệm thực tế tại TP.HCM.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {TIN_TUC_MAIN_HUBS.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="rounded-full border border-primary/25 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              {hub.label}
            </Link>
          ))}
          <Link
            href="/cong-trinh"
            className="rounded-full border border-accent/40 bg-white px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
          >
            Công trình tiêu biểu
          </Link>
        </div>
      </div>
    </section>
  );
}
