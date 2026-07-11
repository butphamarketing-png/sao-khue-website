import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { useSiteSettings, useTopBarSlogan } from "@/lib/site-settings";

const MIN_VISIBLE_MS = 900;
const MAX_VISIBLE_MS = 2800;

function waitForPageReady(): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();
  if (document.readyState === "complete") return Promise.resolve();
  return new Promise((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

export function SiteLoader() {
  const s = useSiteSettings();
  const slogan = useTopBarSlogan();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startedAt = Date.now();
    let disposed = false;

    const tick = window.setInterval(() => {
      if (disposed) return;
      const elapsed = Date.now() - startedAt;
      const target = Math.min(88, 12 + elapsed / 14);
      setProgress((prev) => Math.max(prev, target));
    }, 48);

    const hide = () => {
      if (disposed) return;
      disposed = true;
      window.clearInterval(tick);
      setProgress(100);
      window.setTimeout(() => setVisible(false), 380);
    };

    const minDelay = new Promise<void>((r) => window.setTimeout(r, MIN_VISIBLE_MS));
    const maxDelay = new Promise<void>((r) => window.setTimeout(r, MAX_VISIBLE_MS));
    const ready = Promise.race([Promise.all([waitForPageReady(), minDelay]), maxDelay]);

    void ready.then(hide);

    return () => {
      disposed = true;
      window.clearInterval(tick);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      window.dispatchEvent(new CustomEvent("saokhue:loader-done"));
    }
  }, [visible]);

  const brandShort =
    s.companyName?.includes("SAO KHUÊ") || s.companyName?.includes("Sao Khuê")
      ? "KIẾN TRÚC SAO KHUÊ"
      : s.companyName;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Đang tải website"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          className="site-loader"
        >
          <div className="site-loader__backdrop" aria-hidden>
            <span className="site-loader__orb site-loader__orb--1" />
            <span className="site-loader__orb site-loader__orb--2" />
            <span className="site-loader__orb site-loader__orb--3" />
            <span className="site-loader__grid" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="site-loader__card"
          >
            <div className="site-loader__logo-wrap">
              <span className="site-loader__logo-ring" aria-hidden />
              <span className="site-loader__logo-ring site-loader__logo-ring--delay" aria-hidden />
              <BrandLogo
                src={s.loadingLogoUrl || s.logoUrl}
                alt={s.companyName}
                className="site-loader__logo"
              />
            </div>

            <p className="site-loader__eyebrow">Đang tải</p>
            <h1 className="site-loader__title">{brandShort}</h1>
            {slogan && <p className="site-loader__slogan">{slogan}</p>}

            <div className="site-loader__progress-track" aria-hidden>
              <motion.div
                className="site-loader__progress-bar"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </div>

            <p className="site-loader__hint">
              {progress >= 100 ? "Sẵn sàng" : "Đang chuẩn bị nội dung…"}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
