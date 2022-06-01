import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

//Step 1 : Collect all the files from blogdata directory
//Step 2: Iterate through them and display them

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Link href={"/BlogPost/learn-javascript"}>
            <h3 className={styles.BlogItemh3}>
              How to learn javascript in 2022?
            </h3>
          </Link>
          <p>Javascript is the language</p>
        </div>
        <div className="BlogItem">
          <h3>How to learn javascript in 2022?</h3>
          <p>Javascript is the language</p>
        </div>
        <div className="BlogItem">
          <h3>How to learn javascript in 2022?</h3>
          <p>Javascript is the language</p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
