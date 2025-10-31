import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza Zeghari - Software Engineer | Full Stack Developer",
  description: "Software engineer based in Casablanca, Morocco specializing in building exceptional websites and web applications with React, Node.js, PHP, and Laravel.",
  keywords: ["Hamza Zeghari", "Software Engineer", "Full Stack Developer", "Web Developer", "React", "Node.js", "PHP", "Laravel", "Casablanca", "Morocco"],
  authors: [{ name: "Hamza Zeghari", url: "https://hamzazeghari.com" }],
  creator: "Hamza Zeghari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hzeghari.me",
    title: "Hamza Zeghari - Software Engineer | Full Stack Developer",
    description: "Software engineer based in Casablanca, Morocco specializing in building exceptional websites and web applications.",
    siteName: "Hamza Zeghari Portfolio",
    images: [
      {
        url: "/images/01.png",
        width: 1200,
        height: 630,
        alt: "Hamza Zeghari - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Zeghari - Software Engineer",
    description: "Software engineer based in Casablanca, Morocco specializing in building exceptional websites and web applications.",
    creator: "@hzeghari",
    images: ["/images/01.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        {children}
      </body>
    </html>
  );
}
