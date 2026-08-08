import type { Metadata, Viewport } from 'next';
import ReactDOM from 'react-dom';
import './globals.css';
import Analytics from './components/Analytics';
import JsonLd from './components/JsonLd';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SOCIAL_INFOS } from './constants/infos';
import { SITE, absoluteUrl } from './constants/site';

/** Only the faces used above the fold; the rest load on demand from globals.css. */
const PRELOADED_FONTS = [
  '/fonts/signifier-light.woff2',
  '/fonts/mabry-regular-pro.woff2',
  '/fonts/mabry-mono-medium-pro.woff2',
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SOCIAL_INFOS.fullname}`,
  },
  description: SITE.description,
  keywords: [
    SOCIAL_INFOS.fullname,
    'hzeghari',
    'Full Stack Developer',
    'Software Engineer',
    'Web Developer',
    'React Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'Nest.js Developer',
    'Frontend Developer',
    'Backend Developer',
    'React',
    'TypeScript',
    'Node.js',
    'Nest.js',
    'MongoDB',
    'SQL',
    'Tailwind CSS',
    'Next.js',
    'Express.js',
    'Docker',
    'IZI Safety',
    SITE.locality,
    SITE.countryName,
    'Freelance Developer',
    'Web Applications',
    'API Development',
  ],
  authors: [{ name: SOCIAL_INFOS.fullname, url: SITE.url }],
  creator: SOCIAL_INFOS.fullname,
  publisher: SOCIAL_INFOS.fullname,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: absoluteUrl('/'),
    title: SITE.shortTitle,
    description: SITE.shortDescription,
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.shortTitle,
    description: SITE.shortDescription,
    creator: SITE.twitterHandle,
    site: SITE.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: absoluteUrl('/'),
  },
  verification: {
    google: '5m6zpB1wEGvl-NDbydhb0EYQN9MbaVN3960CMjRBJxM',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: SITE.themeColorLight },
    { media: '(prefers-color-scheme: dark)', color: SITE.themeColorDark },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The faces are declared in globals.css, so the browser would otherwise only
  // discover them after parsing the stylesheet and laying out the page.
  PRELOADED_FONTS.forEach((href) =>
    ReactDOM.preload(href, {
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    }),
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies the stored theme before first paint so dark mode never flashes. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:border-2 focus:border-current focus:bg-(--background) focus:px-4 focus:py-3 focus:font-mono focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
        <JsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
