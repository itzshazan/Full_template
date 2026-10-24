import type { Metadata } from "next";
import { BlogSidebar, PostList } from "@/components/Blog";
import { Breadcrumb, InnerBanner } from "@/components/InnerBanner";
import { posts } from "@/data/blog";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Child health tips and guidance for parents from Dr. Jharna K Doshi.",
};

export default function BlogPage() {
  return (
    <>
      <InnerBanner image={images.innerBanners.blog} caption={null} />
      <Breadcrumb trail={[{ label: "Blog" }]} />
      <div className="inner-cont">
        <div className="lay-width tcontainer tcontainer--blog">
          <div className="tright">
            <PostList title="Blog" posts={posts} />
          </div>
          <BlogSidebar />
        </div>
      </div>
    </>
  );
}
