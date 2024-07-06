import React from "react";
import classNames from "classnames";

import { Cover } from "../../../Cover";

import styles from "./Section1.module.css";

export const Section1 = () => {
  return (
    <div className={styles.container}>
      <Cover opacity={0.74} />
      <div className={styles.content}>
        <div className={classNames(styles.text, "h1")}>Blog</div>
      </div>
    </div>
  );
};
