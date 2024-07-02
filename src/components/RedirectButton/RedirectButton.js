import styles from "./RedirectButton.module.css";

export const RedirectButton = ({ label, href }) => {
  return (
    <a
      className={styles.buttonContainer}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class={styles.buttonLabel}>{label}</span>
    </a>
  );
};

export const GetStartedButton = () => {
  return <RedirectButton label="Get Started" href="http://interviewlynx.app" />;
};

export const LearnMore = () => {
  return (
    <RedirectButton
      label="Learn More"
      href="http://https://www.interviewlynx.com/interviewer/"
    />
  );
};

export const ApplyNowButton = () => {
  return <RedirectButton label="Apply Now" href="https://interviewlynx.app/" />;
};
