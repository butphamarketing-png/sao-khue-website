import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "@/components/ui/spinner";
import { useSiteSettings } from "@/lib/site-settings";

export function SiteLoader() {
  const s = useSiteSettings();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.88, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-[#17579d]/10 blur-2xl" />
              <img
                src={s.loadingLogoUrl || s.logoUrl || "/favicon.svg"}
                alt={s.companyName}
                className="relative h-24 w-24 rounded-2xl object-contain"
              />
            </motion.div>
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-[#17579d]">
                Loading
              </div>
              <div className="mt-2 text-xl font-bold text-slate-900">{s.companyName}</div>
            </div>
            <Spinner className="size-6 text-[#17579d]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
