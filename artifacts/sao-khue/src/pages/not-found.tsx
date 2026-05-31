import { Link } from "wouter";
import { AlertCircle, ArrowRight, Home, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/PageShell";
import { PageBanner } from "@/components/PageBanner";
import { telHref, useNavMenu, usePageBanner, usePrimaryPhone } from "@/lib/site-settings";

export default function NotFound() {
  const menu = useNavMenu();
  const banner = usePageBanner("notFound");
  const phone = usePrimaryPhone();
  const quickLinks = menu.filter((item) => item.href !== "/").slice(0, 6);

  return (
    <PageShell>
      <PageBanner title={banner.title} subtitle={banner.subtitle} />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500">
              <AlertCircle className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{banner.bodyTitle}</h2>
              <p className="mt-2 leading-relaxed text-slate-600">{banner.bodyText}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1 rounded-full">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Về trang chủ
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1 rounded-full border-primary text-primary">
              <a href={telHref(phone)}>
                <PhoneCall className="mr-2 h-4 w-4" />
                Gọi {phone}
              </a>
            </Button>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              Liên kết nhanh
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                >
                  {item.title}
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
