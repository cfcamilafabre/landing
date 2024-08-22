import styles from "../home/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>FABRICANDO SUSHI</h1>
      <span className={styles.title}>SINCE 2010</span>
      <a href="#2" className={styles.button}>
        Ver catálogo
      </a>
    </div>
    </div>
  );
};

export default Home;
