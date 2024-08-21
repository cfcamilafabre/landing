import styles from "../footer/Footer.module.css";
import { Form } from "./Form";

const Footer = () => {

  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <img src="/Logo.png" className={styles.logoFooter} alt="Logo de la empresa"></img>
      </div>

      <div className={styles.col2}>
        <a href="#1">Sobre Nosotros</a>
        <a href="#2">Contacto</a>
        <a href="#3">Productos</a>
      </div>

      <div className={styles.col3}>
        <Form/>
      </div>
    </div>
  );
};

export default Footer;
