import styles from '../styles/Header.module.css'
import siteInfo from '../lib/siteInfo'

import Link from 'next/link'
import classNames from 'classnames'

const Header = (props) => {
  const headerClass = classNames({
    'gutter': true,
    [styles.header]: true,
  });

  return (
    <header className={headerClass}>
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