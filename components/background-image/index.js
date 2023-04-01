import React from "react";
import Link from "next/link";
import Image from "next/image";
//import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";
import Header from "../header";

//import forest from './forest/orman.jpg';

function BackgroundImage() {
  
    return (
      <div className={styles.banner}> 
          <div className={styles.websitePosterOverlay}/>
          <Image
            unoptimized
            src="https://serkankaragoz.github.io/next-album-deploy/forest/orman.JPG" 
            // TODO find aa better way to link the image.
            // using relative path didn't work.
            alt={"Forest Image"}
            fill
            style={{objectFit:"cover"}}
          />  
      </div>

    );
  }

// export { FeatureWebsiteLoading } from "./loading";
export default BackgroundImage;