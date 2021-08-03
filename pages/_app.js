import Head from "next/head";

import siteInfo from "@data/siteInfo";
import "../styles/globals.css";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{siteInfo.title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
