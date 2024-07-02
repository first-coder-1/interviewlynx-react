import React from "react";

import { Section1, Section2, Section3, Section4, Section5 } from "./components";

import styles from "./Interviewer.module.css";

export function Interviewer() {
  return (
    <div className={styles.container}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
