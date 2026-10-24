/**
 * Pulls blog post *metadata* (slug, title, date, categories, featured image) from the
 * WordPress REST API and writes it to src/data/posts.json.
 *
 * Usage:  npm run fetch-posts
 *
 * Article bodies are intentionally not downloaded – add them to src/data/postContent.ts.
 */
import { writeFile } from "node:fs/promises";

const API = "https://www.drshwetawazir.com/wp-json/wp/v2";
const OUT = new URL("../src/data/posts.json", import.meta.url);

const decode = (s) =>
  s
    .replace(/&#8217;|&#039;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#038;|&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]+>/g, "")
    .trim();

async function getAll(path) {
  const items = [];
  for (let page = 1; ; page++) {
    const res = await fetch(`${API}/${path}${path.includes("?") ? "&" : "?"}per_page=100&page=${page}`);
    if (!res.ok) break;
    const batch = await res.json();
    items.push(...batch);
    const total = Number(res.headers.get("x-wp-totalpages") || 1);
    if (page >= total) break;
  }
  return items;
}

const categories = await getAll("categories?_fields=id,name,slug,count");
const catById = new Map(categories.map((c) => [c.id, { name: decode(c.name), slug: c.slug }]));

const posts = await getAll("posts?_embed=wp:featuredmedia&_fields=slug,title,date,categories,_links,_embedded");

const out = posts.map((p) => {
  const media = p._embedded?.["wp:featuredmedia"]?.[0];
  const sizes = media?.media_details?.sizes ?? {};
  const pick = (...names) => names.map((n) => sizes[n]?.source_url).find(Boolean) ?? media?.source_url ?? "";
  return {
    slug: p.slug,
    title: decode(p.title.rendered),
    date: p.date,
    categories: p.categories.map((id) => catById.get(id)).filter(Boolean),
    image: media?.source_url ?? "",
    thumb: pick("dentalo_570x360", "medium_large", "large"),
    card: pick("dentalo_240x157", "medium", "thumbnail"),
  };
});

await writeFile(
  OUT,
  JSON.stringify({ categories: categories.filter((c) => c.count > 0).map((c) => ({ name: decode(c.name), slug: c.slug })), posts: out }, null, 1)
);
console.log(`Saved ${out.length} posts and ${categories.length} categories to src/data/posts.json`);
