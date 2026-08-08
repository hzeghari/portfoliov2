import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  SOCIAL_INFOS,
} from '../constants/infos';
import { SITE, SOCIAL_URLS, absoluteUrl } from '../constants/site';

/**
 * Server-rendered schema.org graph so search engines can build a knowledge
 * panel from the same data the page renders.
 */
export default function JsonLd(): React.ReactElement {
  const personId = absoluteUrl('/#person');
  const websiteId = absoluteUrl('/#website');

  const currentRole = EXPERIENCES[0];
  const skills = Array.from(
    new Set(EXPERIENCES.flatMap((experience) => experience.technologies ?? [])),
  );

  const graph = [
    {
      '@type': 'Person',
      '@id': personId,
      name: SOCIAL_INFOS.fullname,
      alternateName: SOCIAL_INFOS.user,
      url: absoluteUrl('/'),
      email: `mailto:${SOCIAL_INFOS.email}`,
      telephone: SOCIAL_INFOS.phone,
      image: absoluteUrl('/images/01.png'),
      jobTitle: SITE.jobTitle,
      description: SITE.shortDescription,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.locality,
        addressRegion: SITE.region,
        addressCountry: SITE.country,
      },
      worksFor: {
        '@type': 'Organization',
        name: currentRole.company,
      },
      alumniOf: EDUCATION.map((education) => ({
        '@type': 'EducationalOrganization',
        name: education.institution,
      })),
      hasCredential: CERTIFICATIONS.map((certification) => ({
        '@type': 'EducationalOccupationalCredential',
        name: certification.name,
        credentialCategory: 'certificate',
        recognizedBy: { '@type': 'Organization', name: certification.issuer },
      })),
      knowsAbout: skills,
      sameAs: SOCIAL_URLS,
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: absoluteUrl('/'),
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'en-US',
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': absoluteUrl('/#webpage'),
      url: absoluteUrl('/'),
      name: SITE.title,
      isPartOf: { '@id': websiteId },
      about: { '@id': personId },
      mainEntity: { '@id': personId },
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Schema output is built from local constants, so there is no user input
      // to escape here.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}
