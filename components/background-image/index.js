import React from "react";
import Link from "next/link";
import Image from "next/image";
//import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

import forest from '../../assets/orman.jpg';

function BackgroundImage() {
  
    return (
      <div className={styles.websiteWrapper}>
        <div className={styles.websitePoster}>
          <div className={styles.websitePosterOverlay}></div>
          <Image
            unoptimized
            src={forest}
            alt={"TEST"}
            fill
          />
        </div>
      </div>
    );
  }

// export { FeatureWebsiteLoading } from "./loading";
export default BackgroundImage;