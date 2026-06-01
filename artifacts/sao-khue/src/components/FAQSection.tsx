import { SectionHeader } from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";
import { defaultFaqs } from "@/lib/home-content";
import { useFaqs, useSectionMeta } from "@/lib/site-settings";
import { buildFAQSchema, setStructuredData, stripHtmlForSchema } from "@/lib/seo";

export { defaultFaqs };

type Props = {
  title?: string;
  subtitle?: string;
  items?: { q: string; a: string }[];
  className?: string;
  /** JSON-LD FAQPage cho Google rich results */
  enableSchema?: boolean;
};

export function FAQSection({
  title,
  subtitle,
  items,
  className = "",
  enableSchema = true,
}: Props) {
  const meta = useSectionMeta();
  const faqs = useFaqs();
  const resolvedItems = items ?? faqs;
  const resolvedTitle = title ?? meta.faq.title;
  const resolvedSubtitle = subtitle ?? meta.faq.subtitle;

  useEffect(() => {
    if (!enableSchema || resolvedItems.length === 0) {
      setStructuredData("faq", null);
      return;
    }
    setStructuredData(
      "faq",
      buildFAQSchema(
        resolvedItems.map((item) => ({
          q: item.q,
          a: stripHtmlForSchema(item.a),
        })),
      ),
    );
    return () => setStructuredData("faq", null);
  }, [enableSchema, resolvedItems]);

  if (resolvedItems.length === 0) return null;

  return (
    <section className={`section-white ${className}`}>
      <div className="site-container mx-auto max-w-3xl">
        <SectionHeader title={resolvedTitle} subtitle={resolvedSubtitle} />
        <Accordion
          type="single"
          collapsible
          className="content-card divide-y divide-slate-100 px-2 md:px-4"
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
