import Document, { Html, Head, Main, NextScript } from "next/document";
import siteInfo from "@data/siteInfo";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />

          <meta property="og:title" content={siteInfo.title} />
          <meta property="og:site_name" content={siteInfo.title} />
          <meta property="og:url" content={siteInfo.url} />
          <meta property="og:description" content={siteInfo.description} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={siteInfo.opengraphImage} />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,400;0,700;1,400&family=PT+Sans:wght@700&display=swap" rel="stylesheet"></link> */}
          <link
            rel="preload"
            href="/fonts/JetBrainsMono-Bold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono-Regular.woff2"
            as="font"
            crossOrigin=""
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
