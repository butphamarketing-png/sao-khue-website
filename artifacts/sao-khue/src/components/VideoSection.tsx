import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useHomeVideo, useSectionMeta } from "@/lib/site-settings";

function toEmbedUrl(url: string): string {
  if (!url) return "";
  if (url.includes("youtube.com/embed/") || url.includes("player.vimeo.com")) return url;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    if (parsed.hostname.includes("youtu.be")) {
      const videoId = parsed.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    if (parsed.hostname.includes("vimeo.com")) {
      const videoId = parsed.pathname.replace("/", "");
      return videoId ? `https://player.vimeo.com/video/${videoId}` : url;
    }
    return url;
  } catch {
    return url;
  }
}

export function VideoSection() {
  const homeVideo = useHomeVideo();
  const meta = useSectionMeta();
  const [open, setOpen] = useState(false);
  const embedUrl = useMemo(() => toEmbedUrl(homeVideo.url), [homeVideo.url]);

  if (!homeVideo.url) return null;

  return (
    <>
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            light
            title={meta.video.title}
            subtitle={meta.video.subtitle}
          />
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={() => setOpen(true)}
            className="group relative mx-auto block w-full max-w-4xl overflow-hidden rounded-3xl ring-2 ring-white/20 transition hover:ring-accent/60"
          >
            <div className="aspect-video bg-slate-800">
              <img
                src="/images/hero-2.png"
                alt="Video Sao Khuê"
                className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 transition group-hover:bg-slate-950/20">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-2xl shadow-accent/40 transition group-hover:scale-110">
                <PlayCircle size={40} />
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6 text-left">
              <p className="text-lg font-bold text-white">{homeVideo.label || "Xem video giới thiệu"}</p>
            </div>
          </motion.button>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl border-0 p-0 overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>{homeVideo.label}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full bg-black">
            {embedUrl && (
              <iframe
                title={homeVideo.label}
                src={embedUrl}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
