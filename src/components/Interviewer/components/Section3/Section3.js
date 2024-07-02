import React from "react";

import styles from "./Section3.module.css";
import { ApplyNowButton } from "../../../RedirectButton";

const Block = ({ title, description }) => {
  return (
    <div className={styles.block}>
      <span className={styles.smallTitle}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export const Section3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Why Choose InterviewLynx?</div>
      <div className={styles.content}>
        <Block
          title="Specialized Expertise: "
          description="As a Career Coach with InterviewLynx, you’ll help people within your own field. This ensures you already know the ins and outs of the industry, providing clients with the most relevant, practical advice for success."
        />
        <Block
          title="Exclusive Program: "
          description="Our program is exclusive to those who meet our stringent criteria. To qualify, you must have:"
        />
        <ol className={styles.listContainer}>
          <li className={styles.list}>
            At least 2 years of experience in your field.
          </li>
          <li className={styles.list}>Verifiable work history.</li>
          <li className={styles.list}>
            Completion of our comprehensive training program to become a
            certified coach.
          </li>
        </ol>
        <Block
          title="Unlimited Income Potential: "
          description="With InterviewLynx, you set your own rates and availability, allowing you to earn as much as you desire. Whether you’re looking to supplement your income or replace it entirely, the potential is limitless."
        />
        <Block
          title="Recession-Proof Business Model:"
          description="In any economic climate, job seekers are abundant, and most seek genuine advice from real experts. By becoming a Career Coach, you tap into a continuously growing market, ensuring a stable and rewarding income stream."
        />
        <Block
          title="Rewarding Experience:"
          description="There’s nothing more fulfilling than helping deserving professionals recognize and achieve their potential. As a Career Coach, you’ll play a crucial role in their journey, guiding them towards their career aspirations and celebrating their successes."
        />
        <ApplyNowButton />
      </div>
    </div>
  );
};
