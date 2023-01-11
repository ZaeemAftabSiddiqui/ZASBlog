import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About ZAS-blog </h1>
      <h2>Introduction</h2>
      <p>
        Welcome to our professional coding blog! We are a team of experienced
        developers and we created this blog to share our knowledge and
        experiences with the community. Our blog covers a wide range of topics
        related to coding, including web development, software engineering, and
        more.
      </p>
      <h2>Services offered</h2>
      <p>
        High-quality articles written by experienced developers Regularly
        updated with new content Detailed explanations and code examples to help
        you understand the concepts A search function to help you find specific
        topics Responsive design for easy reading on any device
      </p>
      <h2>Topics Covered</h2>
      <p>Our blog covers a wide range of topics, including:</p>
      <ul>Web development: HTML, CSS, JavaScript, and more</ul>
      <ul>Software engineering: design patterns, best practices, and more</ul>
      <ul>Programming languages: Python, Java, C++, and more</ul>
      <ul>Cloud computing: AWS, Azure, and more</ul>

      <h2>Contact us</h2>
      <p>
        If you have any questions or feedback, please feel free to reach out to
        us at [Email: zaeemaftabsiddiqui@gmail.com]. We'd love to hear from you!
      </p>
      <h1>Contribute</h1>
      <p>
        If you are interested in contributing to our blog, please send a writing
        sample and your areas of expertise to [Email:
        zaeemaftabsiddiqui@gmail.com]. We are always looking for new
        perspectives and fresh content.
      </p>
      <h1>Social Media</h1>
      <p>
        Follow us on our social media to stay updated with new articles and
        other informations. [https://twitter.com/ZaeemAftab]
        [https://github.com/ZaeemAftabSiddiqui]
        [https://www.linkedin.com/in/zaeem-aftab-siddiqui-ba45b21a2/]
      </p>
      <h2>Conclusion</h2>
      <p>
        Thank you for visiting our professional coding blog. We hope that you
        find our articles informative and helpful. If you have any feedback or
        suggestions for topics that you would like to see covered on our blog,
        please don't hesitate to reach out to us. We look forward to hearing
        from you!
      </p>
    </div>
  );
};

export default About;
