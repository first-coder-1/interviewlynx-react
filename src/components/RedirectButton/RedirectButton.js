import styles from "./RedirectButton.module.css";

export const RedirectButton = ({ label, href, target }) => {
  return (
    <a
      className={styles.buttonContainer}
      href={href}
      target={target ? target : "_self"}
      rel="noopener noreferrer"
    >
      <span className={styles.buttonLabel}>{label}</span>
    </a>
  );
};

export const GetStartedButton = () => {
  return (
    <RedirectButton
      label="Get Started"
      href="http://interviewlynx.app"
      target="_blank"
    />
  );
};

export const LearnMore = () => {
  return <RedirectButton label="Learn More" href="/interviewer" />;
};

export const ApplyNowButton = () => {
  return (
    <RedirectButton
      label="Apply Now"
      href="https://interviewlynx.app/"
      target="_blank"
    />
  );
};
