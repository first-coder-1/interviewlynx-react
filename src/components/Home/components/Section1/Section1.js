import React from "react";

import styles from "./Section1.module.css";

import { GetStartedButton } from "../RedirectButton";
import { Cover } from "../Cover";

export const Section1 = () => {
  return (
    <div className={styles.container}>
      <Cover />
      <div className={styles.content}>
        <div className={styles.text1}>Ace Your Next Interview</div>
        <div className={styles.text2}>
          Practice Interviewing With Professionals In Your Industry
        </div>
        <GetStartedButton />
      </div>
    </div>
  );
};
