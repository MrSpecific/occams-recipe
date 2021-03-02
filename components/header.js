import styles from '../styles/Header.module.css'
import siteInfo from '../lib/siteInfo';

import Link from 'next/link';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href={'/'}>
          <a>{props.title || siteInfo.title}</a>
        </Link>
      </h1>
      {props.children}
    </header>
  )
}


export default Header