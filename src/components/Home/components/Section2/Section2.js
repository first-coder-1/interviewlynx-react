import React from "react";
import classNames from "classnames";

import styles from "./Section2.module.css";

export const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.label, "h2")}>
        Why Choose InterviewLynx
      </div>
    </div>
  );
};
