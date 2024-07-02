import React from "react";

import styles from "./Cover.module.css";

export const Cover = ({ opacity }) => {
  return <div className={styles.cover} style={{ opacity }} />;
};
