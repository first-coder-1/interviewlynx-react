import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Section4.module.css";

const LIST = [
  {
    title: "Improved Student Satifaction",
    description:
      "Students feel a sense of appreciation toward their school for providing a service that sets them up for success after they graduate. ",
  },
  {
    title: "Improved Career Placement Rate",
    description:
      "Practice interviews significantly improve the rate of graduates not only landing jobs, but landing jobs in their fields of study.",
  },
  {
    title: "Improved Reputation",
    description:
      "Schools are able to boast their career placement rates and students are more likely to leave positive reviews of their schools after they have successfully landed jobs in their chosen industry. ",
  },
  {
    title: "Increased Applicant Rate",
    description:
      "As potential students are deciding between schools, prospective students are more likely to choose a school that offers InterviewLynx as a professional development tool.",
  },
  {
    title: "Increased Profitability",
    description:
      "With increased applicants, schools are able to generate more revenue. ",
  },
];

const Block = ({ title, description, isOpen, setOpenedTitle }) => {
  return (
    <div
      className={styles.blockContainer}
      onClick={() => (isOpen ? setOpenedTitle(null) : setOpenedTitle(title))}
    >
      <span className={classNames(styles.blockTitle, isOpen && styles.isOpen)}>
        {title}
        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
      </span>
      {isOpen && <span className={styles.blockDescription}>{description}</span>}
    </div>
  );
};

export const Section4 = () => {
  const [openedTitle, setOpenedTitle] = React.useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.subContainer}>
          <div className={styles.title}>What's In It For Your School</div>
          <div className={styles.blockContainer}>
            {LIST.map((item) => (
              <Block
                key={item.title}
                {...item}
                isOpen={openedTitle === item.title}
                setOpenedTitle={setOpenedTitle}
              />
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <img
            width="100%"
            height="auto"
            decoding="async"
            src="https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1142918319-2.jpg?fit=600%2C425&amp;ssl=1"
            title="College students on university campus"
            alt="Urbana, Illinois, April 17, 2016 - Students are out on the Quad lawn of the University of Illinois college campus in Urbana Champaign"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
