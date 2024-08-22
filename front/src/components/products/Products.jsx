import ArrowIcon from "../icons/ArrowIcon";
import styles from "../products/Products.module.css";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
      <div className={styles.container} id="2">
        <h2 className={styles.title}>NUESTRO MENÚ</h2>
        <div className={styles.scrollDownIndicator}>
          <span className={styles.arrow}>
            <ArrowIcon />
          </span>
          <span className={styles.arrow}>
            <ArrowIcon />
          </span>
          <span className={styles.arrow}>
            <ArrowIcon />
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
