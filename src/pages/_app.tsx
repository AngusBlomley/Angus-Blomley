import "../../src/app/globals.css";
import type { AppProps } from "next/app";
import { DarkModeProvider } from "@/contexts/darkModeContext";
import { LanguageProvider } from "@/contexts/language";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
