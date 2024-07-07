import React from "react";
import classNames from "classnames";

import styles from "./Section6.module.css";

const Block = ({ title, description }) => {
  return (
    <div className={styles.block}>
      <span className={styles.smallTitle}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export const Section6 = () => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.title, "h2")}>What You Will Do?</div>
      <div className={styles.content}>
        <Block
          title="Mock Interviews: "
          description="As an InterviewLynx Career Coach, you will review job descriptions provided by your clients and create custom interview questions tailored to the specific role. You will coordinate with your client to schedule a mutually convenient time for the mock interview. You will have access to the recording of the interview, allowing you to thoroughly review and analyze it. You will then provide structured feedback to your client, including suggestions for improvement."
        />
        <Block
          title="Professional Guidance: "
          description="Not all clients will need interview support. Some may seek insights into your industry or profession. As a mentor, you will guide them in navigating their careers. This guidance can cover topics such as salary negotiation, recommended degrees or certifications, and other relevant career advice."
        />
      </div>
    </div>
  );
};
