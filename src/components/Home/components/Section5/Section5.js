import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendarAlt,
  faComments,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Section5.module.css";
import YouTube from "react-youtube";
import { GetStartedButton } from "../../../RedirectButton";

const BLOCK_MAP = [
  {
    icon: faSearch,
    title: "Find Your Coach",
    description:
      "Begin by searching by job title or industry. You will find a variety of highly skilled professionals who know what it takes to be successful in your next role.",
  },
  {
    icon: faCalendarAlt,
    title: "Schedule Your Mock Interview",
    description:
      "Once you decide on a coach, simply view their availability and book your mock interview.",
  },
  {
    icon: faComments,
    title: "Practice Interviewing With An Expert",
    description:
      "Virtually interview with your personal career expert. Do your best, but remember, it is okay to make mistakes.",
  },
  {
    icon: faClipboard,
    title: "Review Your Personalized Results",
    description:
      "Receive personalized and structured feedback within 24 hours. This feedback will highlight your strengths while also acknowledging areas that may need improvement.",
  },
];

const Block = ({ title, description, icon }) => {
  return (
    <div className={styles.blockContainer}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <div className={styles.blockSubContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export const Section5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {BLOCK_MAP.map((block) => (
          <Block key={block.title} {...block} />
        ))}
        <GetStartedButton />
      </div>
      <div>
        <YouTube videoId="tym4GOSE2-g" opts={{ width: "100%" }} />
      </div>
    </div>
  );
};
