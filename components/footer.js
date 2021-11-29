import styles from '@styles/Footer.module.css';
// import siteInfo from "@data/siteInfo";

import Link from 'next/link';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <a
        href="//github.com/MrSpecific"
        className={styles.attribution}
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by Will Christenson
      </a>
    </footer>
  );
};

export default Footer;
