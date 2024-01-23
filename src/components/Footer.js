import React from 'react';
import * as styles from './styles/Footer.module.css'; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} James Medaugh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
