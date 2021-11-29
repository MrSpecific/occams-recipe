import Document, { Html, Head, Main, NextScript } from 'next/document';

const Body = ({ children }) => {
  return <body>{children}</body>;
};

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
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,400;0,700;1,400&family=PT+Sans:wght@700&display=swap" rel="stylesheet"></link> */}
          <link rel="preload" href="/fonts/JetBrainsMono-Bold.woff2" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/JetBrainsMono-Regular.woff2" as="font" crossOrigin="" />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}

export default MyDocument;
