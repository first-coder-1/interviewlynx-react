import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <span>
          <a
            href="https://www.interviewlynx.com/"
            class="custom-logo-link transparent-custom-logo"
            rel="home"
            itemprop="url"
            aria-label="InterviewLynx"
          >
            <img
              width="200"
              height="28"
              src="https://www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8-200x28.png"
              class="custom-logo"
              alt=""
              decoding="async"
              srcset="https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8.png?resize=200%2C28&amp;ssl=1 200w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8.png?resize=300%2C41&amp;ssl=1 300w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8.png?resize=1024%2C142&amp;ssl=1 1024w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8.png?resize=768%2C106&amp;ssl=1 768w, https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/09/cropped-Asset-2@2x-8.png?w=1041&amp;ssl=1 1041w"
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
    </div>
  );
}
