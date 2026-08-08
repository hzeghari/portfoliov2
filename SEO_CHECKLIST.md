# SEO status for hzeghari.dev

Checklist of what the codebase actually ships. Items marked done are implemented in source, not aspirational.

## Implemented

### Technical SEO
- [x] Dynamic `sitemap.xml` via `app/sitemap.ts` (canonical pages only: `/`, `/resume`)
- [x] Dynamic `robots.txt` via `app/robots.ts` (no static duplicate under `public/`)
- [x] Canonical URLs on home and `/resume`
- [x] Site-wide metadata in `app/layout.tsx`
- [x] Resume-specific metadata in `app/resume/layout.tsx`
- [x] JSON-LD `Person` / `WebSite` / `ProfilePage` graph via `app/components/JsonLd.tsx`
- [x] Responsive viewport + `theme-color` for light and dark via the `viewport` export
- [x] Google Search Console verification tag in root metadata

### Social / sharing
- [x] Open Graph tags (title, description, URL, locale, site name)
- [x] Twitter large-image card with the correct `@hzeghari47` handle
- [x] Generated 1200×630 Open Graph image at `app/opengraph-image.tsx`
- [x] Generated favicon / Apple Touch / PWA icons (`app/icon.tsx`, `app/apple-icon.tsx`, `app/manifest.ts`)
- [x] Social profile links in the footer and contact section

### Performance / a11y that affect SEO
- [x] `next/image` for the profile photo
- [x] Self-hosted Signifier / Mabry fonts, preloaded above the fold
- [x] Semantic landmarks, heading hierarchy, skip link, ARIA on interactive controls
- [x] 44px-class touch targets on primary controls

## Not claimed / still open

- [ ] Rich Results test after deploy (Person / ProfilePage)
- [ ] PageSpeed Insights baseline after deploy
- [ ] Social preview check (Twitter / LinkedIn / Facebook debugger)
- [ ] Contentful project copy and real project screenshots (see `app/constants/projects.ts`)
- [ ] Optional: dedicated OG image art beyond the generated typographic one
- [ ] Optional: Content-Security-Policy with nonces for the theme script + gtag

## Manual follow-ups after merge

1. Re-submit `https://hzeghari.dev/sitemap.xml` in Search Console if it was previously submitted with the old fragment URLs.
2. Re-run the LinkedIn / Twitter card validators so they pick up the new `/opengraph-image` URL.
3. Rewrite the project blurbs in `app/constants/projects.ts` in your own words and add any missing links.
