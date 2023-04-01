import React from 'react'
import styles from "./styles.module.css";
import Link from 'next/link';

function Footer() {
  return (
      <footer className={styles.footer}>
        <br/>
        <Link href="https://github.com/serkankaragoz"  className={styles.logo}>
          Click for my GitHub account
        </Link>
        <br/>
        <br/>
      </footer>
  )
}

export default Footer;