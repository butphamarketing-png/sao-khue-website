import { useEffect } from "react";
import { useLocation } from "wouter";
import { trackSiteVisit } from "@/lib/site-visits-api";

/** Ghi nhận lượt xem trang (không theo dõi /admin). */
export function SiteVisitTracker() {
  const [location] = useLocation();

  useEffect(() => {
    if (!location || location.startsWith("/admin")) return;
    void trackSiteVisit(location);
  }, [location]);

  return null;
}
