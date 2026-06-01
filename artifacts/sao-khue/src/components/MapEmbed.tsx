import { mapEmbedSrc, sanitizeGoogleMapEmbed } from "@/lib/google-integrations";

type Props = {
  embedHtml?: string;
  address: string;
  title?: string;
  className?: string;
};

export function MapEmbed({
  embedHtml = "",
  address,
  title = "Bản đồ",
  className = "absolute inset-0 h-full w-full border-0",
}: Props) {
  const sanitized = sanitizeGoogleMapEmbed(embedHtml);
  const src = mapEmbedSrc(embedHtml, address);

  if (sanitized) {
    return (
      <div
        className="absolute inset-0 [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:border-0"
        dangerouslySetInnerHTML={{ __html: sanitized }}
      />
    );
  }

  if (!src) return null;

  return (
    <iframe
      title={title}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={src}
    />
  );
}
