import React from 'react';
import Link from "next/link";
import {FaTree } from 'react-icons/fa';

import styles from "./styles.module.css";
import BackgroundImage from '../background-image';


function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
        <div className={styles.headerWrapper}>
            <Link href="/"  className={styles.logo}>
                <FaTree/> KASTAMONU
            </Link>
            <nav className={styles.navigationMenu}>
                <Link href='/'>Lorem</Link>
                <Link href='/'>Ipsum</Link>
            </nav>
        </div>
        <BackgroundImage/>
        <br/>
    </header>
  );
}

export default Header;