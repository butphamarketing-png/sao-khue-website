import { SectionHeader } from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { defaultFaqs } from "@/lib/home-content";
import { useFaqs, useSectionMeta } from "@/lib/site-settings";

export { defaultFaqs };

type Props = {
  title?: string;
  subtitle?: string;
  items?: { q: string; a: string }[];
  className?: string;
};

export function FAQSection({ title, subtitle, items, className = "" }: Props) {
  const meta = useSectionMeta();
  const faqs = useFaqs();
  const resolvedItems = items ?? faqs;
  const resolvedTitle = title ?? meta.faq.title;
  const resolvedSubtitle = subtitle ?? meta.faq.subtitle;

  if (resolvedItems.length === 0) return null;

  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto max-w-3xl px-4">
        <SectionHeader title={resolvedTitle} subtitle={resolvedSubtitle} />
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm"
        >
          {resolvedItems.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-slate-600">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
