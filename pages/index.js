import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Dummy from "../Components/Dummy";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Dummy />
      <style jsx>{`
        .myspan {
          color: red;
        }
      `}</style>
      <Head>
        <title>Next.js mastery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="Keywords" content="nextjs, personal blog, blog " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <script src="/sc.js" strategy="lazyOnload"></script> */}
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/About">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/Blog">
            <a>
              <li>Blog</li>
            </a>
          </Link>
          <Link href="/Contact">
            <a>
              <li>Contact</li>
            </a>
          </Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="myspan dummy"> Welcome to personal Blog</span>
        </h1>

        <p className={styles.description}>
          A blog for students by Best teacher
        </p>
        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="BlogItem">
            <h3>How to learn javascript in 2022?</h3>
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
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
