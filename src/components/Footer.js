import React from 'react';
import * as styles from './Footer.module.css'; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} James Medaugh. All rights reserved.</p>
      {/* Add any other footer content here */}
    </footer>
  );
};

export default Footer;
