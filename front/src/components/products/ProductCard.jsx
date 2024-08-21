import styles from "../products/ProductCard.module.css";

const ProductCard = ({ title, img }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={img} className={styles.imgCard}></img>
      <span className={styles.titleCard}>{title}</span>
    </div>
  );
};

export default ProductCard;
