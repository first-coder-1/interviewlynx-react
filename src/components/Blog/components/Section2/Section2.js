import React from "react";

import styles from "./Section2.module.css";

const data = [
  {
    id: 1,
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2024/06/interviewlynx-04.jpg?fit=300%2C195&amp;ssl=1",
    title:
      "Pros and Cons of Working Remotely and On-Site: Finding the Right Fit for You",
    text: "In today’s job market, the choice between working remotely and on-site is a significant consideration for many professionals. Each option has its own set of unique advantages and disadvantages. Understanding these can help you make an informed decision about what type of work environment suits you best. Here’s a look",
    link: "https://www.interviewlynx.com/pros-and-cons-of-working-remotely-and-on-site-finding-the-right-fit-for-you/",
  },
  {
    id: 2,
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2024/06/interviewlynx-05.jpg?fit=300%2C200&ssl=1",
    title:
      "Signs You’re in a Toxic Work Environment and How to Transition to a Better Job",
    text: "The workplace should be a place where you feel valued, supported, and motivated. However, for many, it can become a source of stress and dissatisfaction. A toxic work environment can have a detrimental impact on your mental health, productivity, and overall well-being. Here are some signs that you might be",
    link: "https://www.interviewlynx.com/signs-youre-in-a-toxic-work-environment-and-how-to-transition-to-a-better-job/",
  },
  {
    id: 3,
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2024/06/interviewlynx-03.jpg?fit=300%2C200&ssl=1",
    title:
      "Mastering the Art of Asking for a Raise: Avoiding Pitfalls and Achieving Success",
    text: "Asking for a raise can be a nerve-wracking experience. It requires careful preparation, a clear understanding of your value, and the ability to communicate effectively. Unfortunately, many employees make mistakes that can hurt their chances. Here are some common pitfalls to avoid and strategies for successfully asking for a raise,",
    link: "https://www.interviewlynx.com/mastering-the-art-of-asking-for-a-raise-avoiding-pitfalls-and-achieving-success/",
  },
  {
    id: 4,
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2024/06/interviewlynx-02-scaled.jpg?fit=300%2C200&ssl=1",
    title:
      "Mastering Salary Negotiation: Avoiding Pitfalls and Achieving Success",
    text: "Negotiating your salary is a crucial step in the job search process, but it’s also one where many candidates stumble. Asking for too much, using other job offers improperly, or coming across as rude and arrogant can all derail your chances of landing a job. Here are some common pitfalls",
    link: "https://www.interviewlynx.com/mastering-salary-negotiation-avoiding-pitfalls-and-achieving-success/",
  },
  {
    id: 5,
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2024/06/interviewlynx-01-scaled.jpg?resize=300%2C200&ssl=1",
    title:
      "Navigating the Interview Process: What to Expect and How to Succeed",
    text: "The interview process can be both exciting and nerve-wracking. Understanding what to expect can help you prepare and boost your confidence. Here’s a breakdown of the typical stages in the interview process and how InterviewLynx can help you navigate each step to increase your chances of landing the job.  ",
    link: "https://www.interviewlynx.com/navigating-the-interview-process-what-to-expect-and-how-to-succeed/",
  },
  {
    id: 6,
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/iStock-1359746894-scaled.jpg?fit=300%2C200&ssl=1",
    title: "Breaking the Cycle: Finding a Job After College",
    text: "Graduating from college is an exhilarating milestone, but for many, it’s quickly followed by the daunting task of finding a job. The reality is, college doesn’t always equip you with the skills needed to navigate the job market effectively. This often leads to a frustrating cycle of interviews and rejections.",
    link: "https://www.interviewlynx.com/breaking-the-cycle-finding-a-job-after-college/",
  },
  {
    id: 7,
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-21-at-4.03.44-PM.png?fit=300%2C200&ssl=1",
    title: "Mastering the Art of Interview Preparation: Your Path to Success",
    text: "Preparing for a job interview can feel overwhelming, but with the right approach and resources, you can significantly increase your chances of landing your dream job. Here are some essential steps to help you get ready for interviews and how a Career Coach from InterviewLynx can be your secret weapon",
    link: "https://www.interviewlynx.com/mastering-the-art-of-interview-preparation-your-path-to-success/",
  },
];

const BlogBlock = ({ image, title, text, link }) => {
  return (
    <a className={styles.blogBlock} href={link}>
      <img
        fetchpriority="high"
        decoding="async"
        width="100%"
        height="auto"
        src={image}
        alt=""
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{text}</div>
      <div className={styles.readMore}>{`READ MORE >>`}</div>
    </a>
  );
};

export const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {data.map((item) => (
          <BlogBlock {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
