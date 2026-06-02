import type { ReactNode } from "react";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

type Props = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: Props) {
  return (
    <div className={`flex min-h-screen flex-col font-sans ${className}`}>
      <TopBar />
      <Header />
      <main className="relative flex-1 pb-44 md:pb-0">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
