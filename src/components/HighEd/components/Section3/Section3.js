import React from "react";

import styles from "./Section3.module.css";

const LIST = [
  {
    title: "Knowledge",
    description:
      "Interviewees learn what it takes to be successful in their next roles.",
  },
  {
    title: "Strategy",
    description:
      "Develop an actionable plan to navigate through the toughest interviews. ",
  },
  {
    title: "Confidence",
    description:
      "Reduce anxiety and boost confidence by learning and sharpening interview skills.",
  },
  {
    title: "Authority",
    description:
      "Interviewees learn how to position themselves as a top prospect by leveraging their experience, skills, and education.",
  },
];

const Block = ({ index, title, description }) => {
  return (
    <div className={styles.blockContainer}>
      <div className={styles.blockNumber}>{`0${index + 1}`}</div>
      <span className={styles.blockTitle}>{title}</span>
      <span className={styles.blockDescription}>{description}</span>
    </div>
  );
};

export const Section3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>How Can Mock Interviews Help</div>
        <div className={styles.content}>
          {LIST.map((item, index) => (
            <Block key={item.title} index={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
