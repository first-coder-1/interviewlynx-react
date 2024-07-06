import React from "react";
import classNames from "classnames";
import { LearnMore } from "../../../RedirectButton";
import { Cover } from "../../../Cover";

import styles from "./Section6.module.css";

const TITLE = "Be A Career Coach";

const DESCRIPTION_LIST = [
  "Looking for additional income? Sign up to be an coach  and start earning money today. Set your own rates and availability. Work from the comfort of your home or anywhere in the world.",
  "You will receive expert training through our Lynx Academy program. Upon completing this concise yet comprehensive course, you will earn your Lynx Certification, enabling you to coach and mentor professionals to achieve new career milestones.",
  "As a coach, you have the ability to make a lasting impact on the lives of recent college grads, individuals who are switching professions, and many more.",
];

export const Section6 = () => {
  return (
    <div className={styles.container}>
      <Cover opacity={0.15} />
      <div className={styles.internalContainer}>
        <div>
          <img
            alt=""
            className={styles.image}
            decoding="async"
            fetchpriority="high"
            height="1707"
            sizes="(max-width: 1200px) 100vw, 1200px"
            src="https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1309784530-scaled.jpg?fit=2560%2C1707&ssl=1"
            srcSet="https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1309784530-scaled.jpg?w=2560&ssl=1 2560w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1309784530-scaled.jpg?resize=300%2C200&ssl=1 300w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1309784530-scaled.jpg?resize=1024%2C683&ssl=1 1024w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1309784530-scaled.jpg?resize=768%2C512&ssl=1 768w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1309784530-scaled.jpg?resize=1536%2C1024&ssl=1 1536w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1309784530-scaled.jpg?resize=2048%2C1365&ssl=1 2048w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1309784530-scaled.jpg?w=2400&ssl=1 2400w"
            width="2560"
          />
        </div>
        <div className={styles.subContainer}>
          <div className={classNames("h2", styles.title)}>{TITLE}</div>
          {DESCRIPTION_LIST.map((description) => (
            <div className={styles.description} key={description}>
              {description}
            </div>
          ))}
          <LearnMore />
        </div>
      </div>
    </div>
  );
};
