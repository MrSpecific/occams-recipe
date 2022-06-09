import Head from 'next/head';
// import useWhatInput from 'react-use-what-input';

import siteInfo from '@data/siteInfo';
import '@styles/globals.css';
import { AppContextProvider } from '@data/context';

function Application({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Head>
        <title>{siteInfo.title}</title>
      </Head>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default Application;
