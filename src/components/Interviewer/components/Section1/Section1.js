import React from "react";

import styles from "./Section1.module.css";

import { ApplyNowButton } from "../../../RedirectButton";
import { Cover } from "../../../Cover";

export const Section1 = () => {
  return (
    <div className={styles.container}>
      <Cover opacity={0.74} />
      <div className={styles.content}>
        <div className={styles.text1}>Be A Career Coach</div>
        <div className={styles.text2}>
          Take part in revolutionizing professional development.
        </div>
        <ApplyNowButton />
      </div>
    </div>
  );
};
