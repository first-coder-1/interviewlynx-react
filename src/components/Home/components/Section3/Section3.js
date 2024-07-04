import React from "react";

import styles from "./Section3.module.css";

const BLOCK_MAP = [
  {
    title: "Career Control",
    description:
      "Only 27% of grads have jobs related to their major. Many grads struggle to land their desired job due to a lack of interview skills.",
  },
  {
    title: "Custom Guidance",
    description:
      "Searching for interview tips is smart. However, most sources only provide generic information that is unrelated to the job they are seeking.",
  },
  {
    title: "Confidence",
    description:
      "93% of Americans experience interview anxiety. Mock interviews can drastically reduce anxiety and boost confidence when it matters the most.",
  },
  {
    title: "More Offers",
    description:
      "Becoming a better coach improves your chances of getting more and better offers. This makes it easier to land your dream job in less time.",
  },
];

const Block = ({ title, description }) => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export const Section3 = () => {
  return (
    <div className={styles.container}>
      {BLOCK_MAP.map((block) => (
        <Block {...block} key={block.title} />
      ))}
    </div>
  );
};
