import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { QuoteRequestModal } from "@/components/QuoteRequestModal";
import { isSiteLoaderDone } from "@/lib/site-loader-state";

const AUTO_OPEN_KEY = "saokhue-quote-popup-auto";
const AUTO_OPEN_AFTER_LOADER_MS = 500;
const AUTO_OPEN_FALLBACK_MS = 3600;

type QuoteRequestContextValue = {
  open: boolean;
  openQuoteRequest: () => void;
  closeQuoteRequest: () => void;
};

const QuoteRequestContext = createContext<QuoteRequestContextValue | null>(null);

export function QuoteRequestProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openQuoteRequest = useCallback(() => setOpen(true), []);
  const closeQuoteRequest = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (typeof window === "undefined" || typeof sessionStorage === "undefined") return;
    if (sessionStorage.getItem(AUTO_OPEN_KEY) === "1") return;
    if (window.location.pathname.replace(/\/$/, "").endsWith("/admin")) return;

    const openOnce = () => {
      if (sessionStorage.getItem(AUTO_OPEN_KEY) === "1") return;
      sessionStorage.setItem(AUTO_OPEN_KEY, "1");
      setOpen(true);
    };

    const scheduleOpen = () => {
      window.setTimeout(openOnce, AUTO_OPEN_AFTER_LOADER_MS);
    };

    if (isSiteLoaderDone()) {
      scheduleOpen();
      return;
    }

    const onLoaderDone = () => scheduleOpen();

    window.addEventListener("saokhue:loader-done", onLoaderDone, { once: true });
    const fallback = window.setTimeout(() => {
      window.removeEventListener("saokhue:loader-done", onLoaderDone);
      openOnce();
    }, AUTO_OPEN_FALLBACK_MS);

    return () => {
      window.removeEventListener("saokhue:loader-done", onLoaderDone);
      window.clearTimeout(fallback);
    };
  }, []);

  const value = useMemo(
    () => ({ open, openQuoteRequest, closeQuoteRequest }),
    [open, openQuoteRequest, closeQuoteRequest],
  );

  return (
    <QuoteRequestContext.Provider value={value}>
      {children}
      <QuoteRequestModal open={open} onOpenChange={setOpen} />
    </QuoteRequestContext.Provider>
  );
}

export function useQuoteRequest(): QuoteRequestContextValue {
  const ctx = useContext(QuoteRequestContext);
  if (!ctx) {
    throw new Error("useQuoteRequest must be used within QuoteRequestProvider");
  }
  return ctx;
}
