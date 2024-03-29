import Head from 'next/head';
import siteInfo from '@data/siteInfo';
// import styles from '@styles/layout/Wrapper.module.css';
// import classNames from 'classnames';

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta property="og:title" content={siteInfo.title} key="og:title" />
        <meta property="og:site_name" content={siteInfo.title} key="og:site_name" />
        <meta property="og:url" content={siteInfo.url} key="og:url" />
        <meta property="og:description" content={siteInfo.description} key="og:description" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:image" content={siteInfo.opengraphImage} key="og:image" />
        <meta property="twitter:image" content={siteInfo.opengraphImage} key="twitter:image" />
      </Head>
      {props.children}
    </>
  );
};

export default Layout;
