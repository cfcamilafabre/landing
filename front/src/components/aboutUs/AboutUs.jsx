import styles from "../aboutUs/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>CONOCENOS</h2>
        <span className={styles.subtitle}>
          En Korokke, nos dedicamos a ofrecerte lo mejor de la cocina japonesa
          con <strong className={styles.strong}>ingredientes frescos y auténticos</strong>. Nuestro equipo combina la
          tradición del sushi con un toque moderno para crear una experiencia
          única. ¡Ven a disfrutar del verdadero sabor del sushi!
        </span>
      </div>
    </div>
  );
};

export default AboutUs;
