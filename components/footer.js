import styles from "@styles/Footer.module.css";
// import siteInfo from "@data/siteInfo";

import Link from "next/link";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <Link
        href="//github.com/MrSpecific"
        target="_blank"
        rel="noopener noreferrer"
      >
        <a className={styles.attribution}>
          {/* Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /><br /> */}
          Created by Will Christenson
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
