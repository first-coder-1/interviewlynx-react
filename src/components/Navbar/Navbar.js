import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import styles from "./Navbar.module.css";

const MENU_MAP = [
  { label: "Home", link: "/" },
  { label: "Be a Career Coach", link: "/interviewer" },
  { label: "Higher Ed", link: "/higher-ed" },
  { label: "Blog", link: "/blog" },
];

const MenuContent = () => {
  const { pathname } = useLocation();
  return (
    <>
      {MENU_MAP.map(({ label, link }) => (
        <Link
          key={label}
          className={classNames(
            styles.tab,
            pathname === link && styles.selectedTab
          )}
          to={link}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => setIsOpenMenu(false), [pathname]);

  return (
    <div className={styles.container}>
      <div>
        <span>
          <a href="/" rel="home" itemProp="url" aria-label="InterviewLynx">
            <img
              width="200"
              height="28"
              src="https://www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8-200x28.png"
              alt=""
              decoding="async"
              srcSet="https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8.png?resize=200%2C28&amp;ssl=1 200w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8.png?resize=300%2C41&amp;ssl=1 300w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8.png?resize=1024%2C142&amp;ssl=1 1024w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8.png?resize=768%2C106&amp;ssl=1 768w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8.png?w=1041&amp;ssl=1 1041w"
              sizes="(max-width: 200px) 100vw, 200px"
            />
          </a>
        </span>
      </div>
      <div className={styles.tabContainer}>
        <Link className={styles.tab} to="/">
          Home
        </Link>
        <Link className={styles.tab} to="/interviewer">
          Be a Career Coach
        </Link>
        <Link className={styles.tab} to="/higher-ed">
          Higher Ed
        </Link>
        <Link className={styles.tab} to="/blog">
          Blog
        </Link>
      </div>
      <button className={styles.button} onClick={handleClick}>
        {isOpenMenu ? (
          <svg
            fill="white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
          </svg>
        ) : (
          <svg
            fill="white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 28"
          >
            <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path>
          </svg>
        )}
      </button>
      {isOpenMenu && (
        <div className={styles.menuContainer}>
          <MenuContent />
        </div>
      )}
    </div>
  );
}
