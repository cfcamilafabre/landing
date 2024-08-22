import { useEffect, useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import styles from "../products/Products.module.css";
import ProductCard from "./ProductCard";
import { getProducts } from "../../helpers/getProducts";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const products = await getProducts();
      setLoading(false);
      setProducts(products);
    };
    fetchData();
  }, []);

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
        {!loading ? (
          <div className={styles.containerCards}>
            {products &&
              products.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    img={product.img}
                    title={product.title}
                  />
                );
              })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default Products;
