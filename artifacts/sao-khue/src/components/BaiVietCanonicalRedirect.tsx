import { Redirect, useParams } from "wouter";
import { useGetPostBySlug } from "@workspace/api-client-react";
import { resolvePost } from "@/lib/posts-with-fallback";
import { getPostPublicPath } from "@/lib/post-url";
import { resolveBaiVietLegacyRedirect, resolvePostSlugAlias } from "@/lib/legacy-redirects";
import { useNavMenu } from "@/lib/site-settings";
import PostPage from "@/pages/PostPage";

/** /bai-viet/:slug → canonical (/tin-tuc/..., /dich-vu/..., …) */
export function BaiVietCanonicalRedirect() {
  const { slug: rawSlug } = useParams<{ slug: string }>();
  const menu = useNavMenu();

  const legacyTarget = rawSlug ? resolveBaiVietLegacyRedirect(rawSlug) : null;
  if (legacyTarget && legacyTarget !== `/bai-viet/${rawSlug}`) {
    return <Redirect to={legacyTarget} replace />;
  }

  const slug = rawSlug ? resolvePostSlugAlias(rawSlug) : "";
  const { data, isLoading } = useGetPostBySlug(slug, {
    ...({ retry: false } as any),
  });
  const post = resolvePost(slug, data);

  if (post) {
    const target = getPostPublicPath(post, menu);
    if (target !== `/bai-viet/${rawSlug}`) {
      return <Redirect to={target} replace />;
    }
  }

  return <PostPage />;
}
