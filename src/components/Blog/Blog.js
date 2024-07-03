import React from "react";

import { Section1, Section2 } from "./components";

import styles from "./Blog.module.css";

export function Blog() {
  return (
    <div className={styles.container}>
      <Section1 />
      <Section2 />
    </div>
  );
}
