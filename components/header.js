import styles from '@styles/Header.module.css'
import siteInfo from '@lib/siteInfo'

import Link from 'next/link'
import classNames from 'classnames'
import Razor from '../public/svg/razor.svg'
// import Razor from '@public/svg/razor.svg'

const Header = (props) => {
  const headerClass = classNames({
    'gutter': true,
    [styles.header]: true,
  });

  return (
    <header className={headerClass}>
      <h1 className={styles.title}>
        <Link href={'/'}>
          <a>
            {props.title || siteInfo.title}
            <Razor className={styles.logo}/>
          </a>
        </Link>
      </h1>
      {props.children}
    </header>
  )
}


export default Header