import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.angusblomley.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
