# Dr. Jharna K Doshi – Child Specialist (Next.js)

Next.js (App Router) + React + TypeScript rebuild of drjharnachildspecialist.com.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```

## Content

All text lives in two files:

- `src/data/site.ts`: doctor details, clinics and timings, services, home-page copy, stats, gallery list, testimonials
- `src/data/blog.ts`: blog posts, categories (archives are derived from post dates)

## Photos and videos

Any image or video that is missing from `public/` is shown as a styled placeholder. Drop files at these paths and they appear automatically (restart `npm start` after a production build):

| Path | Used on |
| --- | --- |
| `public/images/logo.png` | Header (a text logo is shown until then) |
| `public/images/banner/01.jpg`, `2.jpg`, `1.jpg` | Home banner slider |
| `public/images/wimg.jpg` | Home welcome section |
| `public/images/dr-jharna.png`, `dr-jharna1.jpg`, `dr-left.jpg` | Doctor photos (home, profile, services sidebar) |
| `public/images/inner-banner1.jpg`, `inner-banner2.jpg`, `inner-banner3.jpg`, `inner-banner-blog.jpg` | Inner page banners |
| `public/images/p1.jpg` … `p5.jpg` | Home "Patients Information" tiles (icons shown until then) |
| `public/images/immunisation-chart1.jpg`, `chart1.jpg`, `chart2.png` | Services page charts |
| `public/images/google-review-logo.png` | Google reviews badge |
| `public/images/gallery/*.jpg` | Gallery (filenames listed in `site.ts`) |
| `public/images/blog/<post-slug>.jpg` | Blog post images |
| `public/video/v1.mp4`, `v2.mp4` | Video testimonials |

## Contact form

`src/app/api/contact/route.ts` validates submissions but currently only logs them on the server. Connect an email service there before going live.

## Legacy URLs

`next.config.ts` permanently redirects the old URLs (`/index.php`, `/*.html`, `/blog/archive.php?year=&month=`) to the new routes.
