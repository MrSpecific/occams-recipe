import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { Squeeze as Hamburger } from "hamburger-react";

import styles from "@styles/components/Nav.module.css";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const navClass = classNames({
    [styles.nav]: true,
    [styles.major]: true,
  });

  return (
    <section>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <nav className={navClass}></nav>
    </section>
  );
};

export default Nav;
