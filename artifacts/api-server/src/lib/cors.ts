import type { CorsOptions } from "cors";

const DEFAULT_ORIGINS = [
  "https://kientrucsaokhue.com",
  "https://www.kientrucsaokhue.com",
  "http://localhost:5173",
  "http://localhost:21322",
  "http://127.0.0.1:5173",
];

export function getCorsOptions(): CorsOptions {
  const configured = (process.env.CORS_ORIGINS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const allowed = configured.length > 0 ? configured : DEFAULT_ORIGINS;

  return {
    credentials: true,
    origin(origin, callback) {
      if (!origin || allowed.includes(origin)) {
        callback(null, true);
        return;
      }
      if (process.env.NODE_ENV !== "production") {
        callback(null, true);
        return;
      }
      callback(new Error(`CORS blocked for origin: ${origin}`));
    },
  };
}
