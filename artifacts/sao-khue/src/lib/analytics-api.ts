export type AnalyticsDailyRow = {
  date: string;
  label: string;
  pageViews: number;
  users: number;
  sessions: number;
};

export type AnalyticsTrafficResponse =
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

export async function fetchAnalyticsTraffic(days = 7): Promise<AnalyticsTrafficResponse> {
  const res = await fetch(`/api/analytics/traffic?days=${days}`, {
    credentials: "include",
  });
  if (res.status === 401) {
    return {
      configured: false,
      reason: "api_error",
      message: "Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.",
    };
  }
  if (!res.ok) {
    return {
      configured: false,
      reason: "api_error",
      message: `Không tải được thống kê (${res.status}).`,
    };
  }
  return (await res.json()) as AnalyticsTrafficResponse;
}
