import React from "react";

import styles from "./Section4.module.css";

const DESCRIPTION_LIST = [
  {
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2023/01/iStock-1319790212.jpg?fit=2400%2C1600&amp;ssl=1",
    title: "Set Your Rate",
    description:
      "Set your own rate, starting at $50 per hour. Coaches keep 80% of all transactions and 100% of their tips. InterviewLynx collects a small 20% commission on all transactions.",
  },
  {
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2023/01/iStock-1319790212.jpg?fit=2400%2C1600&amp;ssl=1",
    title: "Control Your Schedule",
    description:
      "Coaches have full flexibility of when interviews are conducted. Some Coaches decide to work full time to maximize their earnings while others prefer to work part time to generate extra income.",
  },
  {
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2023/01/iStock-1319790212.jpg?fit=2400%2C1600&amp;ssl=1",
    title: "Work Where You Want",
    description:
      "You have complete freedom of where you work. All you need is a reliable internet or cellular connection.",
  },
  {
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2023/01/iStock-1319790212.jpg?fit=2400%2C1600&amp;ssl=1",
    title: "Limited Equipment Required",
    description:
      "Limited Equipment Required All you need is a phone, computer, or a tablet and a stable internet or cellular connection.",
  },
];

export const Section4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Perks of The Gig</div>
      <div className={styles.internalContainer}>
        <div className={styles.subContainer}>
          {DESCRIPTION_LIST.map(({ image, title, description }) => (
            <div className={styles.blockContainer}>
              <img
                fetchpriority="high"
                decoding="async"
                width="324"
                height="210"
                src={image}
                alt=""
              />
              <div className={styles.blockTitle}>{title}</div>
              <div className={styles.blockDescription}>{description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
