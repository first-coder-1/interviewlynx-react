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
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2024/06/interviewlynx-04.jpg?fit=300%2C195&amp;ssl=1",
    title:
      "Pros and Cons of Working Remotely and On-Site: Finding the Right Fit for You",
    text: "In today’s job market, the choice between working remotely and on-site is a significant consideration for many professionals. Each option has its own set of unique advantages and disadvantages. Understanding these can help you make an informed decision about what type of work environment suits you best. Here’s a look",
    link: "https://www.interviewlynx.com/pros-and-cons-of-working-remotely-and-on-site-finding-the-right-fit-for-you/",
  },
  {
    id: 3,
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2024/06/interviewlynx-04.jpg?fit=300%2C195&amp;ssl=1",
    title:
      "Pros and Cons of Working Remotely and On-Site: Finding the Right Fit for You",
    text: "In today’s job market, the choice between working remotely and on-site is a significant consideration for many professionals. Each option has its own set of unique advantages and disadvantages. Understanding these can help you make an informed decision about what type of work environment suits you best. Here’s a look",
    link: "https://www.interviewlynx.com/pros-and-cons-of-working-remotely-and-on-site-finding-the-right-fit-for-you/",
  },
  {
    id: 4,
    image:
      "https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2024/06/interviewlynx-04.jpg?fit=300%2C195&amp;ssl=1",
    title:
      "Pros and Cons of Working Remotely and On-Site: Finding the Right Fit for You",
    text: "In today’s job market, the choice between working remotely and on-site is a significant consideration for many professionals. Each option has its own set of unique advantages and disadvantages. Understanding these can help you make an informed decision about what type of work environment suits you best. Here’s a look",
    link: "https://www.interviewlynx.com/pros-and-cons-of-working-remotely-and-on-site-finding-the-right-fit-for-you/",
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
