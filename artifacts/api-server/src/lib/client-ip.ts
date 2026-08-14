import type { Request } from "express";

function header(req: Request, name: string): string {
  const raw = req.headers[name];
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (!value) return "";
  try {
    return decodeURIComponent(value).trim();
  } catch {
    return value.trim();
  }
}

export function getClientIp(req: Request): string {
  const forwarded = header(req, "x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "";
  const realIp = header(req, "x-real-ip");
  if (realIp) return realIp;
  const cf = header(req, "cf-connecting-ip");
  if (cf) return cf;
  return req.socket.remoteAddress?.replace(/^::ffff:/, "") ?? "";
}

export function getRequestGeo(req: Request): { city: string; region: string; country: string } {
  return {
    city: header(req, "x-vercel-ip-city") || header(req, "cf-ipcity"),
    region: header(req, "x-vercel-ip-country-region") || header(req, "cf-region"),
    country: header(req, "x-vercel-ip-country") || header(req, "cf-ipcountry"),
  };
}
