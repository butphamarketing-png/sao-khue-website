import { Link } from "wouter";
import {
  resolvePostHubLinks,
  resolveRelevantCaseStudies,
  type HubLink,
} from "@workspace/seed-content";

type Props = {
  slug: string;
  category?: string;
};

function LinkGrid({ title, links }: { title: string; links: HubLink[] }) {
  if (!links.length) return null;
  return (
    <section className="content-card mt-8 p-6 md:p-8">
      <h2 className="text-xl font-bold text-primary">{title}</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-primary hover:bg-white hover:text-primary"
            >
              <span aria-hidden className="text-accent">
                →
              </span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PostHubLinksSection({ slug, category }: Props) {
  const hubLinks = resolvePostHubLinks(slug, category);
  const caseStudies =
    category?.toLowerCase() === "cong-trinh"
      ? []
      : resolveRelevantCaseStudies(slug);

  if (!hubLinks.length && !caseStudies.length) return null;

  return (
    <>
      <LinkGrid title="Chủ đề liên quan" links={hubLinks} />
      {caseStudies.length > 0 && (
        <LinkGrid title="Công trình tham khảo" links={caseStudies} />
      )}
    </>
  );
}
