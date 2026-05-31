import { Redirect, useParams } from "wouter";
import NotFound from "@/pages/not-found";
import { resolveLegacyPath } from "@/lib/legacy-redirects";

/** Catches old WordPress root URLs like /sua-nha-tron-goi-tphcm from Google. */
export function LegacySlugRedirect() {
  const params = useParams<{ slug: string }>();
  const target = resolveLegacyPath(params.slug ?? "");

  if (target) {
    return <Redirect to={target} />;
  }

  return <NotFound />;
}
