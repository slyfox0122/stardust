# Stardust website contributor guide

## Project
This repository contains the static, three-language Stardust automotive-film website for Malaysia and international visitors. The Sites project is `appgprj_6abe10c69eb08191a2e6d9fdaecfefa3`; its preview URL is https://stardust-carfilm.slyfoz.chatgpt.site. Keep the existing publication visibility unless the user requests a change.

## Structure and build
This project now uses Next.js with React and the Pages Router, exported to `out/` for static hosting.
- `lib/content.json` is the canonical three-language copy and contact data.
- `lib/site.js` defines language routes and shared metadata/WhatsApp helpers.
- `components/` contains reusable React layout, product, content, and enquiry components.
- `pages/[lang]/[[...slug]].jsx` generates all 33 multilingual routes with `getStaticPaths` and `getStaticProps`.
- `pages/_document.jsx` sets each exported document's language.
- `public/assets/` contains the styles, logo and images. Browser interactions are handled by React.
- `.openai/hosting.json` retains the Sites project and deploys `out/`.
- The Python generator, `content_updates.py`, and `dist/` are legacy references and are no longer build inputs.

Run from the repository directory:

```sh
npm ci
npm run dev
npm run build
npm run check
```

Use `npm run dev` for development, and deploy the generated `out/` directory. Update all language versions together. Never edit generated `out/` files. Keep `public/sitemap.xml` aligned with routes and metadata. See README.md for the source layout.

## Product and brand requirements
- Maintain English (`/en/`), Bahasa Melayu (`/ms/`), and Chinese (`/zh/`) pages together. Language switching must retain the equivalent current route.
- Preserve all five categories: window tinting film, car wrapping, transparent PPF, colour PPF, and custom print wrap.
- Keep the footer slogan exactly `Protect Your Ride. Define Your Style` across languages.
- Product and partnership enquiries use WhatsApp `+6016-4099838` (`https://wa.me/60164099838`) with URL-encoded contextual messages. The visitor confirms sending within WhatsApp.
- Preserve official social links and the Puchong address from `lib/content.json`.
- Use a premium, restrained automotive presentation: simple product displays, brand storytelling, clear technical explanations, and accessible owner and dealer journeys.
- Corporate claims must be grounded in the supplied company profiles. Distinguish group capabilities from Malaysian operations. Do not invent specifications, certifications, warranty terms, or performance promises. Concept imagery must not be represented as real installations or factory evidence.

## Verification
After meaningful changes, rebuild and verify all affected routes in each language, internal links, asset references, product-specific WhatsApp messages, and the footer. Check canonical URLs, language alternate links, sitemap entries, and structured data when changing routes or metadata. Preview desktop and mobile layouts and test navigation, language selection, and enquiry interactions for UI changes. Report any browser checks that could not be completed; do not claim search rankings or AI recommendations are guaranteed.

Check `git status --short` before and after edits. Avoid altering unrelated user work. Do not deploy merely to validate a build; follow the user's requested scope and the Sites workflow for publication.
