import React from 'react';
import { Link } from 'gatsby';
import * as styles from './NavBar.module.css';

const NavBar = () => {
    return (
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link className={styles.navLink} to="/">Home</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} to="/projects">Projects</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  };
  

export default NavBar;