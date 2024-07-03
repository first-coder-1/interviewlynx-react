import React from "react";

import styles from "./Section1.module.css";

import { Cover } from "../../../Cover";

export const Section1 = () => {
  return (
    <div className={styles.container}>
      <Cover opacity={0.74} />
      <div className={styles.content}>
        <div className={styles.text}>Blog</div>
      </div>
    </div>
  );
};
