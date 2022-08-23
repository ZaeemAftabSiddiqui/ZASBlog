import React, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";

//Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> {blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log(context);
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/GetBlog?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}
export default slug;
