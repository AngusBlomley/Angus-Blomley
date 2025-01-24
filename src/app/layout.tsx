import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Angus Blomley",
  description: "Angus Blomley's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </LanguageProvider>
  );
}
