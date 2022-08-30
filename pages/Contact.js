import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, email, name, desc);
    const data = { phone, name, email, desc };
    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for contacting us");
        setName("");
        setPhone("");
        setEmail("");
        setDesc("");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            required
            aria-describedby="emailHelp"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            required
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <div id="emailHelp" className={styles.formtext}>
            We'll never share your email with anyone else.
          </div>
        </div>{" "}
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Enter phone number
          </label>
          <input
            className={styles.input}
            type="phone"
            id="phone"
            required
            aria-describedby="emailHelp"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
          <div id="emailHelp" className={styles.formtext}>
            We'll never share your phone with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="floatingTextarea2" className={styles.formlabel}>
            Elaborate your Concern
          </label>
          <textarea
            className={styles.input}
            value={desc}
            onChange={handleChange}
            placeholder="Write your concern here"
            name="desc"
            id="desc"
            required
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
