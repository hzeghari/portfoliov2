import type { MetadataRoute } from 'next';
import { SITE } from './constants/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.shortTitle,
    short_name: 'HZeghari',
    description: SITE.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: SITE.themeColorLight,
    theme_color: SITE.themeColorLight,
    orientation: 'portrait-primary',
    lang: 'en-US',
    dir: 'ltr',
    categories: ['business', 'productivity'],
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/icon/192', sizes: '192x192', type: 'image/png' },
      { src: '/icon/512', sizes: '512x512', type: 'image/png' },
      {
        src: '/icon/512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
