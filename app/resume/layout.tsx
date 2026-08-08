import type { Metadata } from 'next';
import { SOCIAL_INFOS } from '../constants/infos';
import { SITE, absoluteUrl } from '../constants/site';

/**
 * `page.tsx` is a client component and therefore cannot export metadata, so the
 * route's metadata lives on this layout instead.
 */
export const metadata: Metadata = {
  title: 'Resume',
  description: `${SITE.jobTitle} resume with 5+ years of experience in React, TypeScript, Node.js, and Nest.js. View my professional experience, education, and technical skills.`,
  keywords: [
    `${SOCIAL_INFOS.fullname} Resume`,
    'Full Stack Developer Resume',
    'React Developer CV',
    'TypeScript Developer Resume',
    'Node.js Developer Resume',
    'Software Engineer Resume',
    `${SITE.countryName} Developer`,
    `${SITE.locality} Developer`,
  ],
  openGraph: {
    title: `Resume - ${SOCIAL_INFOS.fullname}`,
    description:
      'Full-stack developer resume with 5+ years of experience. Currently at IZI Safety.',
    url: absoluteUrl('/resume'),
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Resume - ${SOCIAL_INFOS.fullname}`,
    description: 'Full-stack developer resume with 5+ years of experience.',
  },
  alternates: {
    canonical: absoluteUrl('/resume'),
  },
};

export default function ResumeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
