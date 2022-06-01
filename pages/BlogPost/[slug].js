import React from "react";
import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nobis
          debitis consectetur consequuntur nihil labore assumenda adipisci
          laudantium, eveniet dignissimos accusamus distinctio accusantium
          minus! Asperiores sint sapiente voluptatem ab nam?
        </div>
      </main>
    </div>
  );
};

export default slug;
