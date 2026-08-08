import { SOCIAL_INFOS } from './infos';
import { SOCIAL_PROFILES } from './social';

/**
 * Single source of truth for site-wide values. `NEXT_PUBLIC_SITE_URL` lets
 * preview deployments advertise their own origin instead of production.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hzeghari.dev'
).replace(/\/$/, '');

export const SITE = {
  url: SITE_URL,
  name: `${SOCIAL_INFOS.fullname} - Developer Portfolio`,
  title: `${SOCIAL_INFOS.fullname} - Full Stack Developer | React, TypeScript, Node.js`,
  shortTitle: `${SOCIAL_INFOS.fullname} - Full Stack Developer`,
  description:
    'Full-stack developer based in Casablanca, Morocco. Specializing in building scalable web applications with React, TypeScript, Node.js, and Nest.js. Currently working at IZI Safety.',
  shortDescription:
    'Full-stack developer specializing in React, TypeScript, Node.js, and Nest.js. Building scalable web applications in Casablanca, Morocco.',
  jobTitle: 'Full Stack Developer',
  locale: 'en_US',
  locality: 'Casablanca',
  region: 'Casablanca-Settat',
  country: 'MA',
  countryName: 'Morocco',
  twitterHandle: '@hzeghari47',
  /** Matches the light-mode `--background` token in globals.css. */
  themeColorLight: '#CCCCC2',
  /** Matches the dark-mode `--background` token in globals.css. */
  themeColorDark: '#0C0C0F',
} as const;

/** Absolute URL for a site-relative path, required by OG/Twitter and JSON-LD. */
export function absoluteUrl(path = '/'): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** `sameAs` entries for JSON-LD, derived from the links already in the footer. */
export const SOCIAL_URLS: string[] = SOCIAL_PROFILES.map(
  (profile) => profile.slug,
);
