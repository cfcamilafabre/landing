import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../footer/Footer.module.css"

export const Form = () => {
  const form = useRef();

  useEffect(() => {
    emailjs.init(process.env.PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, {
        publicKey: process.env.PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          Suscríbete a nuestro newsletter:
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          placeholder="Tu email"
          required
          className={styles.input}
        />
        <input type="submit" value="Send" className={styles.button} />
      </form>
    </>
  );
};
