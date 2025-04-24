import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to key domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          {/* Add meta description for SEO */}
          <meta
            name="description"
            content="Angus Blomley - React and React Native Developer. Portfolio showcasing web and mobile development projects."
          />

          {/* Add additional accessibility meta tags */}
          <meta name="theme-color" content="#121212" />
          <meta name="application-name" content="Angus Blomley Portfolio" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Angus Blomley" />

          {/* Non-render blocking font loading with nonce */}
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap"
            rel="stylesheet"
            media="print"
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap"
              rel="stylesheet"
            />
          </noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @media screen {
                @font-face {
                  font-display: swap;
                }
              }
            `,
            }}
          />

          {/* Preload critical fonts */}
          <link
            rel="preload"
            href="/fonts/IBMPlexMono-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
