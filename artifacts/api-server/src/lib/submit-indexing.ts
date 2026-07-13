/**
 * Tự động gửi lập chỉ mục — IndexNow, Google Indexing API, ping sitemap Bing.
 */
import crypto from "node:crypto";

export type SubmitIndexingResult = {
  sitemapPing?: { bing: boolean; google: boolean; errors: string[] };
  indexNow?: { submitted: number; ok: boolean; error?: string };
  googleIndexing?: { submitted: number; failed: number; skipped?: string; errors: string[] };
};

type ServiceAccount = {
  client_email: string;
  private_key: string;
};

const INDEXING_SCOPE = "https://www.googleapis.com/auth/indexing";
const GOOGLE_INDEXING_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const INDEXNOW_CHUNK = 10_000;
const GOOGLE_DAILY_LIMIT = 200;

let cachedIndexingToken: { token: string; expiresAt: number } | null = null;

function siteUrl(): string {
  return (process.env.SITE_URL ?? process.env.VITE_SITE_URL ?? "https://www.kientrucsaokhue.com").replace(
    /\/$/,
    "",
  );
}

function parseServiceAccount(): ServiceAccount | null {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ServiceAccount;
    if (!parsed.client_email || !parsed.private_key) return null;
    return parsed;
  } catch {
    return null;
  }
}

function base64Url(input: Buffer | string): string {
  const buf = typeof input === "string" ? Buffer.from(input) : input;
  return buf.toString("base64url");
}

async function getGoogleAccessToken(account: ServiceAccount, scope: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cachedIndexingToken && cachedIndexingToken.expiresAt > now + 60) {
    return cachedIndexingToken.token;
  }

  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64Url(
    JSON.stringify({
      iss: account.client_email,
      scope,
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  );
  const unsigned = `${header}.${payload}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const signature = signer.sign(account.private_key.replace(/\\n/g, "\n"));
  const jwt = `${unsigned}.${base64Url(signature)}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Google OAuth failed (${res.status}): ${text.slice(0, 200)}`);
  }

  const json = (await res.json()) as { access_token: string; expires_in: number };
  cachedIndexingToken = {
    token: json.access_token,
    expiresAt: now + (json.expires_in ?? 3600),
  };
  return json.access_token;
}

export async function pingSitemap(sitemapUrl?: string): Promise<SubmitIndexingResult["sitemapPing"]> {
  const url = sitemapUrl ?? `${siteUrl()}/sitemap.xml`;
  const encoded = encodeURIComponent(url);
  const errors: string[] = [];
  let bing = false;
  let google = false;

  try {
    const bingRes = await fetch(`https://www.bing.com/ping?sitemap=${encoded}`);
    bing = bingRes.ok;
    if (!bingRes.ok) errors.push(`Bing ping ${bingRes.status}`);
  } catch (err) {
    errors.push(`Bing ping: ${err instanceof Error ? err.message : "failed"}`);
  }

  try {
    const googleRes = await fetch(`https://www.google.com/ping?sitemap=${encoded}`);
    google = googleRes.ok;
    if (!googleRes.ok) errors.push(`Google ping ${googleRes.status}`);
  } catch (err) {
    errors.push(`Google ping: ${err instanceof Error ? err.message : "failed"}`);
  }

  return { bing, google, errors };
}

export async function submitIndexNow(urls: string[]): Promise<SubmitIndexingResult["indexNow"]> {
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!key) {
    return { submitted: 0, ok: false, error: "INDEXNOW_KEY chưa cấu hình" };
  }
  if (!urls.length) return { submitted: 0, ok: true };

  const host = new URL(siteUrl()).host;
  const keyLocation = `${siteUrl()}/${key}.txt`;
  let ok = true;
  let error: string | undefined;

  for (let i = 0; i < urls.length; i += INDEXNOW_CHUNK) {
    const chunk = urls.slice(i, i + INDEXNOW_CHUNK);
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host, key, keyLocation, urlList: chunk }),
    });
    if (!res.ok) {
      ok = false;
      error = `IndexNow ${res.status}: ${(await res.text()).slice(0, 200)}`;
      break;
    }
  }

  return { submitted: urls.length, ok, error };
}

export async function submitGoogleIndexing(urls: string[]): Promise<SubmitIndexingResult["googleIndexing"]> {
  const account = parseServiceAccount();
  if (!account) {
    return {
      submitted: 0,
      failed: 0,
      skipped: "GOOGLE_SERVICE_ACCOUNT_JSON chưa cấu hình",
      errors: [],
    };
  }

  const limit = Number(process.env.INDEXING_GOOGLE_LIMIT ?? GOOGLE_DAILY_LIMIT);
  const batch = urls.slice(0, limit);
  const errors: string[] = [];
  let submitted = 0;
  let failed = 0;

  if (urls.length > limit) {
    errors.push(`Chỉ gửi ${limit}/${urls.length} URL (quota Google Indexing API ~200/ngày)`);
  }

  try {
    const token = await getGoogleAccessToken(account, INDEXING_SCOPE);

    for (const url of batch) {
      try {
        const res = await fetch(GOOGLE_INDEXING_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url, type: "URL_UPDATED" }),
        });
        if (res.ok) {
          submitted += 1;
        } else {
          failed += 1;
          const text = await res.text();
          errors.push(`${url}: ${res.status} ${text.slice(0, 80)}`);
        }
      } catch (err) {
        failed += 1;
        errors.push(`${url}: ${err instanceof Error ? err.message : "failed"}`);
      }
    }
  } catch (err) {
    return {
      submitted: 0,
      failed: batch.length,
      errors: [err instanceof Error ? err.message : "Google Indexing API failed"],
    };
  }

  return { submitted, failed, errors };
}

export type SubmitIndexingOptions = {
  urls?: string[];
  pingSitemap?: boolean;
  indexNow?: boolean;
  googleIndexing?: boolean;
};

/** Gửi lập chỉ mục — ping sitemap + IndexNow + Google Indexing API (nếu cấu hình). */
export async function submitIndexing(options: SubmitIndexingOptions = {}): Promise<SubmitIndexingResult> {
  const urls = options.urls ?? [];
  const result: SubmitIndexingResult = {};

  if (options.pingSitemap !== false) {
    result.sitemapPing = await pingSitemap();
  }

  if (options.indexNow !== false && urls.length > 0) {
    result.indexNow = await submitIndexNow(urls);
  }

  if (options.googleIndexing !== false && urls.length > 0) {
    result.googleIndexing = await submitGoogleIndexing(urls);
  }

  return result;
}

export function formatSubmitIndexingLog(result: SubmitIndexingResult): string {
  const lines: string[] = ["[indexing] Kết quả gửi lập chỉ mục:"];

  if (result.sitemapPing) {
    lines.push(
      `  Sitemap ping — Bing: ${result.sitemapPing.bing ? "OK" : "FAIL"}, Google: ${result.sitemapPing.google ? "OK" : "FAIL"}`,
    );
    if (result.sitemapPing.errors.length) {
      lines.push(`  Ping lỗi: ${result.sitemapPing.errors.join("; ")}`);
    }
  }

  if (result.indexNow) {
    if (result.indexNow.error && result.indexNow.submitted === 0) {
      lines.push(`  IndexNow — bỏ qua (${result.indexNow.error})`);
    } else {
      lines.push(`  IndexNow — ${result.indexNow.submitted} URL, ${result.indexNow.ok ? "OK" : "FAIL"}`);
      if (result.indexNow.error) lines.push(`  IndexNow lỗi: ${result.indexNow.error}`);
    }
  }

  if (result.googleIndexing) {
    if (result.googleIndexing.skipped) {
      lines.push(`  Google Indexing API — bỏ qua (${result.googleIndexing.skipped})`);
    } else {
      lines.push(
        `  Google Indexing API — OK: ${result.googleIndexing.submitted}, lỗi: ${result.googleIndexing.failed}`,
      );
      if (result.googleIndexing.errors.length) {
        lines.push(`  Google lỗi: ${result.googleIndexing.errors.slice(0, 3).join("; ")}`);
      }
    }
  }

  return lines.join("\n");
}
