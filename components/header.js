import styles from '../styles/Header.module.css'
import siteInfo from '../lib/siteInfo';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {props.title || siteInfo.title}
      </h1>
      {props.children}
    </header>
  )
}


export default Header