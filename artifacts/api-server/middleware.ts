/**
 * Edge redirects — Hobby plan không hỗ trợ bulkRedirectsPath và giới hạn 1.024 routes.
 * Chạy trước static files; bulk-redirects.json sinh bởi generate-vercel-redirects.ts.
 */
import bulkRedirects from "./bulk-redirects.json";

type BulkRedirect = { source: string; destination: string };

const REDIRECT_MAP = new Map<string, string>(
  (bulkRedirects as BulkRedirect[]).map((r) => [r.source, r.destination]),
);

function redirect301(path: string, request: Request): Response {
  return Response.redirect(new URL(path, request.url).toString(), 301);
}

export default function middleware(request: Request): Response | undefined {
  const url = new URL(request.url);

  if (url.hostname === "kientrucsaokhue.com") {
    url.hostname = "www.kientrucsaokhue.com";
    return Response.redirect(url.toString(), 301);
  }

  const { pathname } = url;

  if (pathname.length > 1 && pathname.endsWith("/")) {
    url.pathname = pathname.slice(0, -1);
    return Response.redirect(url.toString(), 301);
  }

  if (pathname.startsWith("/gioi-thieu/")) {
    return redirect301(`/bai-viet/${pathname.slice("/gioi-thieu/".length)}`, request);
  }
  if (pathname.startsWith("/kinh-nghiem-xay-dung/")) {
    return redirect301(`/tin-tuc/${pathname.slice("/kinh-nghiem-xay-dung/".length)}`, request);
  }
  if (pathname.startsWith("/kinh-nghiem/")) {
    return redirect301(`/tin-tuc/${pathname.slice("/kinh-nghiem/".length)}`, request);
  }

  const dest = REDIRECT_MAP.get(pathname);
  if (dest) return redirect301(dest, request);

  return undefined;
}

export const config = {
  matcher: [
    "/((?!api|images|assets|favicon.ico|robots.txt|sitemap.xml|feed.xml|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
