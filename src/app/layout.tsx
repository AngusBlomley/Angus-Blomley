import { DarkModeProvider } from "@/contexts/darkModeContext";
import { LanguageProvider } from "@/contexts/language";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import "./styles/globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Angus Blomley - Software Engineer",
  description:
    "Software engineer specializing in high-performance web and mobile applications. Experienced in React, React Native, and Chrome extensions.",
  keywords:
    "software engineer, web development, mobile development, React, React Native, Chrome extensions",
  authors: [{ name: "Angus Blomley" }],
  openGraph: {
    title: "Angus Blomley - Software Engineer",
    description:
      "Software engineer specializing in high-performance web and mobile applications",
    url: "https://www.angusblomley.com",
    siteName: "Angus Blomley Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angus Blomley - Software Engineer",
    description:
      "Software engineer specializing in high-performance web and mobile applications",
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
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexMono.variable} suppressHydrationWarning>
      <head>
        {/* Prevent dark mode flash on page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){const saved=localStorage.getItem('darkMode');const isDark=saved!==null?JSON.parse(saved):true;if(isDark)document.documentElement.classList.add('dark');})();`,
          }}
        />

        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="canonical" href="https://www.angusblomley.com" />
        <link
          rel="preload"
          href="/fonts/HiraKakuPro-W3.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/HiraKakuPro-W6.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className={ibmPlexMono.className}>
        <DarkModeProvider>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
