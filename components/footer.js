

import styles from '../styles/Footer.module.css'
import siteInfo from '../lib/siteInfo';

import Link from 'next/link';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <a>
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> and Will
        </a>
      </Link>
    </footer>
  )
}

{/* <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href={'/'}>
          <a>{props.title || siteInfo.title}</a>
        </Link>
      </h1>
      {props.children}
    </header> */}


export default Footer