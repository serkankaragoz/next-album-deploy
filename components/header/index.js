import React from 'react';
import Link from "next/link";
import {FaTree } from 'react-icons/fa';

import styles from "./styles.module.css";
import BackgroundImage from '../background-image';
import Image from  'next/image'
import HeaderTitles from '../header-titles';


function Header() {
  return (
    <div>
      <header className={styles.banner}>
        
        <Image 
           unoptimized
            src="https://serkankaragoz.github.io/next-album-deploy/forest/orman.JPG" 
            // TODO find aa better way to link the image.
            // using relative path didn't work.
            alt={"Forest Image"}
            fill
            style={{objectFit:"cover"}}
        />
    </header>
    </div>
  );
}

export default Header;