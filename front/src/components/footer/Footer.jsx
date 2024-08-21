import { useState } from "react";
import styles from "../footer/Footer.module.css";

const Footer = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      try {
        const response = await fetch('/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
        setMessage(data.message);
        setEmail('');
      } catch (error) {
        setMessage('Hubo un error en la suscripción');
        console.error('Error:', error);
      }
    };


  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <img src="/Logo.png" className={styles.logoFooter}></img>
      </div>

      <div className={styles.col2}>
        <a href="#1">Sobre Nosotros</a>
        <a href="#2">Contacto</a>
        <a href="#3">Productos</a>
      </div>

      <div className={styles.col3}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.label}>Suscríbete a nuestro newsletter:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu email"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Suscribirse</button>
        </form>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default Footer;
