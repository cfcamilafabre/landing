import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../footer/Footer.module.css"
import Swal from 'sweetalert2'


export const Form = () => {
  const form = useRef();
  const inputRef = useRef(null)
  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;
  const publicKeyId = process.env.PUBLIC_KEY;


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKeyId,
      })
      .then(
        () => {
          Swal.fire("¡Te has suscrito correctamente!");
          inputRef.current.value=('');
          console.log('SUCCESS!');
        },
        (error) => {
          Swal.fire("Ha ocurrido un error en la suscripción");
          inputRef.current.value=('');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
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
          ref={inputRef}
        />
        <input type="submit" value="Suscribirme" className={styles.button} />
      </form>
  );
};
