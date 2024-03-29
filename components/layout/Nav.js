import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';

import Search from '@components/Search';
import styles from '@styles/components/Nav.module.css';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const sectionClass = classNames({
    [styles.navSection]: true,
    [styles.active]: isOpen,
  });

  const navClass = classNames({
    [styles.nav]: true,
    [styles.active]: isOpen,
  });

  const overlayClass = classNames({
    [styles.navOverlay]: true,
    [styles.active]: isOpen,
  });

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <section className={sectionClass}>
      <div className={overlayClass} onClick={closeNav} />
      <nav className={navClass}>
        <div className={styles.navMain}>
          <ol className={styles.primaryNav}>
            <li className={styles.navItem}>
              <Link href={`/`}>All Recipes</Link>
            </li>
            {/* <li className={styles.navItem}>
              <Search />
            </li> */}
          </ol>
        </div>
      </nav>
      <div className={styles.navToggleWrapper}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          className={styles.navToggle}
          duration={0.2}
          color="var(--hamburger-color)"
        />
      </div>
    </section>
  );
};

export default Nav;
