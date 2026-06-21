import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { QuoteRequestModal } from "@/components/QuoteRequestModal";

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
