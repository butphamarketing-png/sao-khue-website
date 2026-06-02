import { Redirect, useParams } from "wouter";
import { useGetPostBySlug } from "@workspace/api-client-react";
import { resolvePost } from "@/lib/posts-with-fallback";
import { getPostPublicPath } from "@/lib/post-url";
import { useNavMenu } from "@/lib/site-settings";
import PostPage from "@/pages/PostPage";

/** /bai-viet/:slug → canonical (/tin-tuc/..., /dich-vu/..., …) */
export function BaiVietCanonicalRedirect() {
  const { slug } = useParams<{ slug: string }>();
  const menu = useNavMenu();
  const { data, isLoading } = useGetPostBySlug(slug ?? "");
  const post = resolvePost(slug, data);

  if (post) {
    const target = getPostPublicPath(post, menu);
    if (target !== `/bai-viet/${slug}`) {
      return <Redirect to={target} replace />;
    }
  }

  if (isLoading && !post) {
    return <PostPage />;
  }

  return <PostPage />;
}
