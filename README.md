# Stardust Car Film — Next.js

A statically exported Next.js / React website with English, Bahasa Melayu, and Chinese routes, five automotive-film categories, and WhatsApp enquiries.

## Development

Requires Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run check
```

Deploy `out/` to static hosting. `.openai/hosting.json` retains the existing Sites project. No Node.js server is required for this export. Contact submissions open a prepared WhatsApp message; visitors confirm sending there.

## Editing

- `lib/content.json`: translations and verified corporate/product copy.
- `lib/site.js`: routes, metadata helpers, and WhatsApp URL construction.
- `components/`: reusable React presentation and interaction components.
- `pages/`: Next.js Pages Router, static language routes, SEO metadata, and document language.
- `public/assets/`: existing logo, images, and styles.
- `public/sitemap.xml` and `public/robots.txt`: update when adding routes or changing the domain.
- `scripts/check-export.mjs`: checks all 33 language routes and their generated links, assets, metadata, and forms.

Legacy Python files, where present in a local workspace, are not used by this Next.js project.

## GPT Taste design

`components/TasteHome.jsx` implements the cinematic homepage, five-product grid, product-selection carousel, GSAP text reveal and pinned manufacturing gallery. `public/assets/taste.css` controls the editorial layouts and responsive styles. Geist is bundled through the `geist` package. Animations respect reduced-motion preferences; moving text has a pause control. Preserve the three languages and verified product copy when iterating.

Review browser layout and interactions locally with `npm run dev` before merging design changes.
