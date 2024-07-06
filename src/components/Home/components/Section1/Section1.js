import React from "react";

import styles from "./Section1.module.css";

import { GetStartedButton } from "../../../RedirectButton";
import { Cover } from "../../../Cover";

export const Section1 = () => {
  return (
    <div className={styles.container}>
      <Cover />
      <div className={styles.content}>
        <div className="h1">Ace Your Next Interview</div>
        <div className="p">
          Practice Interviewing With Professionals In Your Industry
        </div>
        <GetStartedButton />
      </div>
    </div>
  );
};
