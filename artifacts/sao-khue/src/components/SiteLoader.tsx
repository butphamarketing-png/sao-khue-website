import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "@/components/ui/spinner";
import { BrandLogo } from "@/components/BrandLogo";
import { useSiteSettings } from "@/lib/site-settings";

export function SiteLoader() {
  const s = useSiteSettings();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative px-4"
            >
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <BrandLogo
                src={s.loadingLogoUrl || s.logoUrl}
                alt={s.companyName}
                className="relative h-16 w-auto max-w-[min(320px,90vw)] object-contain drop-shadow-md md:h-20 md:max-w-[360px]"
              />
            </motion.div>
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Đang tải
              </div>
              <div className="mt-2 max-w-xs text-lg font-bold text-slate-900">
                {s.companyName}
              </div>
            </div>
            <Spinner className="size-6 text-primary" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
