import type { MetadataRoute } from 'next';
import { absoluteUrl } from './constants/site';

/**
 * Only canonical page URLs belong here. On-page anchors such as `/#about` are
 * not separate documents, so listing them just reports duplicates of `/`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: absoluteUrl('/resume'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
