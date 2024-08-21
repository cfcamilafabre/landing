import styles from "../products/Products.module.css";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
      <div className={styles.container} id="3">
        <h2 className={styles.title}>NUESTRO MENÚ</h2>
        <div className={styles.scrollDownIndicator}>
          <span className={styles.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </span>
          <span className={styles.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </span>
          <span className={styles.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerCards}>
          <ProductCard title="Rolls" img="/products/1.png" />
          <ProductCard title="Niguiris" img="/products/2.png" />
          <ProductCard title="Combinados" img="/products/3.png" />
          <ProductCard title="Extras" img="/products/4.png" />
        </div>
      </div>
    </>
  );
};

export default Products;
