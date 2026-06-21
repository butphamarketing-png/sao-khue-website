import crypto from "node:crypto";

export type AnalyticsDailyRow = {
  date: string;
  label: string;
  pageViews: number;
  users: number;
  sessions: number;
};

export type AnalyticsTrafficResult =
  | {
      configured: true;
      period: { start: string; end: string; days: number };
      totals: { users: number; sessions: number; pageViews: number };
      daily: AnalyticsDailyRow[];
    }
  | {
      configured: false;
      reason: "missing_property" | "missing_credentials" | "api_error";
      message: string;
    };

type ServiceAccount = {
  client_email: string;
  private_key: string;
};

const VI_DAY_LABELS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"] as const;

let cachedToken: { token: string; expiresAt: number } | null = null;
let cachedReport: { key: string; data: AnalyticsTrafficResult; expiresAt: number } | null = null;

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

function propertyId(): string | null {
  const raw = process.env.GA4_PROPERTY_ID?.trim();
  if (!raw) return null;
  return raw.replace(/^properties\//, "");
}

function base64Url(input: Buffer | string): string {
  const buf = typeof input === "string" ? Buffer.from(input) : input;
  return buf.toString("base64url");
}

async function getAccessToken(account: ServiceAccount): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && cachedToken.expiresAt > now + 60) {
    return cachedToken.token;
  }

  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64Url(
    JSON.stringify({
      iss: account.client_email,
      scope: "https://www.googleapis.com/auth/analytics.readonly",
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
  cachedToken = {
    token: json.access_token,
    expiresAt: now + (json.expires_in ?? 3600),
  };
  return json.access_token;
}

function formatDateLabel(isoDate: string): string {
  const y = Number(isoDate.slice(0, 4));
  const m = Number(isoDate.slice(4, 6)) - 1;
  const d = Number(isoDate.slice(6, 8));
  const dt = new Date(y, m, d);
  const day = VI_DAY_LABELS[dt.getDay()] ?? "";
  return `${day} ${String(d).padStart(2, "0")}/${String(m + 1).padStart(2, "0")}`;
}

function isoDateOffset(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}${m}${day}`;
}

export async function fetchAnalyticsTraffic(days = 7): Promise<AnalyticsTrafficResult> {
  const pid = propertyId();
  if (!pid) {
    return {
      configured: false,
      reason: "missing_property",
      message:
        "Chưa cấu hình GA4_PROPERTY_ID trên server. Thêm Property ID (số) vào biến môi trường Vercel.",
    };
  }

  const account = parseServiceAccount();
  if (!account) {
    return {
      configured: false,
      reason: "missing_credentials",
      message:
        "Chưa cấu hình GOOGLE_SERVICE_ACCOUNT_JSON. Tạo service account GCP, cấp quyền Viewer trên GA4, dán JSON vào env.",
    };
  }

  const cacheKey = `${pid}:${days}`;
  const now = Date.now();
  if (cachedReport && cachedReport.key === cacheKey && cachedReport.expiresAt > now) {
    return cachedReport.data;
  }

  try {
    const token = await getAccessToken(account);
    const startDate = `${days}daysAgo`;
    const endDate = "today";

    const res = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${pid}:runReport`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "date" }],
          metrics: [
            { name: "activeUsers" },
            { name: "sessions" },
            { name: "screenPageViews" },
          ],
          orderBys: [{ dimension: { dimensionName: "date" } }],
        }),
      },
    );

    if (!res.ok) {
      const text = await res.text();
      return {
        configured: false,
        reason: "api_error",
        message: `Google Analytics API lỗi (${res.status}). Kiểm tra Property ID và quyền service account. ${text.slice(0, 120)}`,
      };
    }

    const json = (await res.json()) as {
      rows?: Array<{
        dimensionValues: Array<{ value: string }>;
        metricValues: Array<{ value: string }>;
      }>;
    };

    const daily: AnalyticsDailyRow[] = (json.rows ?? []).map((row) => {
      const date = row.dimensionValues[0]?.value ?? "";
      return {
        date,
        label: formatDateLabel(date),
        users: Number(row.metricValues[0]?.value ?? 0),
        sessions: Number(row.metricValues[1]?.value ?? 0),
        pageViews: Number(row.metricValues[2]?.value ?? 0),
      };
    });

    const totals = daily.reduce(
      (acc, row) => ({
        users: acc.users + row.users,
        sessions: acc.sessions + row.sessions,
        pageViews: acc.pageViews + row.pageViews,
      }),
      { users: 0, sessions: 0, pageViews: 0 },
    );

    const result: AnalyticsTrafficResult = {
      configured: true,
      period: {
        start: isoDateOffset(days - 1),
        end: isoDateOffset(0),
        days,
      },
      totals,
      daily,
    };

    cachedReport = { key: cacheKey, data: result, expiresAt: now + 5 * 60 * 1000 };
    return result;
  } catch (err) {
    return {
      configured: false,
      reason: "api_error",
      message: err instanceof Error ? err.message : "Không thể lấy dữ liệu Analytics.",
    };
  }
}
