import React from "react";
import classNames from "classnames";

import styles from "./Section2.module.css";

export const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <div className={classNames("h2", styles.title)}>
            Give Your Students A Competitive Edge
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              width="100%"
              height="auto"
              alt="first"
              fetchpriority="high"
              decoding="async"
              src="https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1323662031-scaled.jpg?fit=2560%2C1555&amp;ssl=1"
            />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            Students spend countless hours studying, sitting through lectures,
            doing exams, writing papers, and more, all in an effort to land
            their dream job after they graduate. However, 73% of graduates do
            not work in their field of study. This is largely due to a lack of
            interview skills.
          </div>
          <div className={styles.description}>
            By offering mock interview services through InterviewLynx, your
            students will have more success with acing critical interviews and
            launching their careers. 93% of people have interview anxiety. Mock
            interviews give students insights into what to expect on the job and
            help to boost their confidence.
          </div>
        </div>
        <div className={styles.label}>INTERVIEWING IS HARD...</div>
        <div className={styles.contentContainer}>
          <div>
            <img
              className={styles.image}
              decoding="async"
              width="100%"
              height="auto"
              src="https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1359746894-scaled.jpg?fit=2560%2C1709&amp;ssl=1"
              alt=""
            />
          </div>
          <div className={styles.content}>
            Being unprepared is the most common mistake job seekers make going
            into an interview. Being unprepared can mean failing to research the
            company, not preparing questions to ask the interviewer(s), or
            failing to practice prior to the interview.
          </div>
        </div>
      </div>
    </div>
  );
};
