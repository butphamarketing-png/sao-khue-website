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

const AUTO_OPEN_KEY = "saokhue-quote-popup-auto";
const AUTO_OPEN_DELAY_MS = 1400;

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
    if (typeof sessionStorage === "undefined") return;
    if (sessionStorage.getItem(AUTO_OPEN_KEY) === "1") return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(AUTO_OPEN_KEY, "1");
      setOpen(true);
    }, AUTO_OPEN_DELAY_MS);

    return () => window.clearTimeout(timer);
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
