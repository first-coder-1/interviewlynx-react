import React from "react";

import styles from "./Section2.module.css";
import classNames from "classnames";

export const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.title, "h2")}>
        Unlock Your Potential as a Career Coach with InterviewLynx
      </div>
      <div className={styles.description}>
        Are you ready to leverage your professional expertise to make a
        significant impact on others’ careers while boosting your own income? At
        InterviewLynx, we offer an exclusive opportunity for industry
        professionals to become Career Coaches, guiding others in the same field
        towards success.
      </div>
    </div>
  );
};
