# Social / Open Graph image

Open Graph and Twitter card images are **generated at build time** by
`app/opengraph-image.tsx` (1200×630 PNG). Next.js wires them into the metadata
automatically — there is no static `/public/images/og.png` to maintain.

`/public/images/01.png` is the **profile photo** used in the About section and
in the Person JSON-LD `image` field. It is no longer used as the social preview.

## Tweaking the generated image

Edit `app/opengraph-image.tsx`. The layout uses the site theme colour from
`app/constants/site.ts` (`themeColorLight`) and the name / job title from the
shared constants, so copy changes usually do not require touching the image file.

After changing it:

1. `npm run build`
2. Inspect `.next/server/app/opengraph-image.body` (or hit `/opengraph-image` on a
   running production server)
3. Re-check with the [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   and the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
   so caches refresh

## Optional custom art

If you want a designed OG image instead of the generated typographic one:

1. Create a 1200×630 PNG under `public/images/` (keep it under ~300 KB)
2. Delete `app/opengraph-image.tsx`
3. Point `openGraph.images` / `twitter.images` in `app/layout.tsx` at that file
