import {
  buildImageAlt,
  getPostPublicPath,
  injectArticleToc,
  normalizeCategory,
  prepareArticleHtml,
  stripFaqSectionFromHtml,
} from "@workspace/seed-content";
import { enhanceArticleHtml } from "@/lib/seo";

type PostLike = {
  slug?: string;
  category?: string;
  content?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  metaKeywords?: string;
};

export function resolvePostImageAlt(post: PostLike): string {
  const custom = post.imageAlt?.trim();
  if (custom) return custom;
  return buildImageAlt({
    slug: post.slug,
    metaKeywords: post.metaKeywords,
  });
}

export function resolvePostImageCaption(post: PostLike): string {
  const cap = post.imageCaption?.trim();
  if (cap) return cap;
  return resolvePostImageAlt(post);
}

/** HTML bài viết: ảnh đại diện → TOC → lazy/alt ảnh. */
export function renderArticleBody(post: PostLike): {
  html: string;
  featuredInjected: boolean;
  imageAlt: string;
  tocInjected: boolean;
} {
  const imageAlt = resolvePostImageAlt(post);
  const imageCaption = resolvePostImageCaption(post);
  const rawContent = post.content ?? "";
  const isTinTuc =
    (post.category && normalizeCategory(post.category) === "tin-tuc") ||
    (post.slug && getPostPublicPath(post as { slug: string; category: string }).startsWith("/tin-tuc/"));
  const content = isTinTuc ? stripFaqSectionFromHtml(rawContent) : rawContent;
  const { html: withImage, featuredInjected } = prepareArticleHtml(content, {
    imageUrl: post.imageUrl,
    imageAlt,
    imageCaption,
  });
  const beforeToc = withImage;
  const withToc = injectArticleToc(withImage);
  const tocInjected = withToc !== beforeToc;

  return {
    html: enhanceArticleHtml(withToc, imageAlt),
    featuredInjected,
    imageAlt,
    tocInjected,
  };
}

