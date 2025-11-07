import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hzeghari.dev"),
  title: {
    default: "Hamza Zeghari - Full Stack Developer | React, TypeScript, Node.js",
    template: "%s | Hamza Zeghari",
  },
  description: "Full-stack developer based in Casablanca, Morocco. Specializing in building scalable web applications with React, TypeScript, Node.js, and Nest.js. Currently working at IZI Safety.",
  keywords: [
    "Hamza Zeghari",
    "hzeghari",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Nest.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "TypeScript",
    "Node.js",
    "Nest.js",
    "MongoDB",
    "SQL",
    "Tailwind CSS",
    "Next.js",
    "Express.js",
    "Docker",
    "IZI Safety",
    "Casablanca",
    "Morocco",
    "Freelance Developer",
    "Web Applications",
    "API Development",
  ],
  authors: [
    { name: "Hamza Zeghari", url: "https://hzeghari.dev" },
  ],
  creator: "Hamza Zeghari",
  publisher: "Hamza Zeghari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hzeghari.dev",
    title: "Hamza Zeghari - Full Stack Developer",
    description: "Full-stack developer specializing in React, TypeScript, Node.js, and Nest.js. Building scalable web applications in Casablanca, Morocco.",
    siteName: "Hamza Zeghari - Developer Portfolio",
    images: [
      {
        url: "/images/01.png",
        width: 1200,
        height: 630,
        alt: "Hamza Zeghari - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Zeghari - Full Stack Developer",
    description: "Full-stack developer specializing in React, TypeScript, Node.js, and Nest.js. Building scalable web applications.",
    creator: "@hzeghari",
    site: "@hzeghari",
    images: ["/images/01.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hzeghari.dev",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "5m6zpB1wEGvl-NDbydhb0EYQN9MbaVN3960CMjRBJxM",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
