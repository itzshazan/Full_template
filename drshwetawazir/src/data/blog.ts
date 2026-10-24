import data from "./posts.json";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  categories: { name: string; slug: string }[];
  image: string;
  thumb: string;
  card: string;
}

export const posts: PostMeta[] = data.posts;
export const categories: { name: string; slug: string }[] = data.categories;

export const postBySlug = new Map(posts.map((p) => [p.slug, p]));

/**
 * Full article bodies, keyed by post slug. Add HTML here (e.g. exported from WordPress)
 * and it will render inside the single-post template:
 *
 *   "ovulation-symptoms-every-woman-should-know": `<p>…</p><h2>…</h2>`,
 */
export const postContent: Record<string, string> = {};

export const POSTS_PER_PAGE = 10;

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export const dayMonth = (iso: string) => {
  const d = new Date(iso);
  return { day: String(d.getDate()).padStart(2, "0"), month: d.toLocaleDateString("en-US", { month: "short" }) };
};
