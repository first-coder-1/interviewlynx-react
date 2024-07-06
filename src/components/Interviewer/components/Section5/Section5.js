import React from "react";
import classNames from "classnames";

import { ApplyNowButton } from "../../../RedirectButton";

import styles from "./Section5.module.css";

export const Section5 = () => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.title, "h2")}>Join Us</div>
      <div className={styles.content}>
        Join InterviewLynx today and transform your professional experience into
        a rewarding and lucrative coaching career. Help others succeed while
        achieving your own career goals. Apply now and start making a
        difference!
        <ApplyNowButton />
      </div>
    </div>
  );
};
