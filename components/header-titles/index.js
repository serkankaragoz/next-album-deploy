import React from 'react';
import Link from "next/link";
import { FaPlayCircle, FaTree } from 'react-icons/fa';

import styles from "./styles.module.css";

function HeaderTitles() {
  return (
    <header className={`${styles.header} container fluid`}>
        <div className={styles.headerWrapper}>
            <Link href="/"  className={styles.logo}>
                <FaTree/> KASTAMONU
            </Link>
            <nav className={styles.navigationMenu}>
                <Link href='/'>Nature</Link>
            </nav>
        </div>
    </header>
  );
}

export default HeaderTitles;