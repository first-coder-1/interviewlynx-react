import React from "react";

import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from "./components";

import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}
