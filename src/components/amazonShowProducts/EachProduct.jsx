import React, { useEffect, useState } from "react";
import styles from "../../amazonShowProductsStyles.module.css";
import { Link } from "react-router-dom";

function EachProduct({ product }) {
  const [isHover, setHover] = useState(false);

  return (
    <Link
      className={styles.eachProductContainer}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      to={`/${product.id}`}
    >
      <div className={styles.imageContainer}>
        <img
          className={`${styles.image} ${isHover && styles.hoverImage}`}
          src={product.image}
        />
      </div>
      <p className={styles.title}>{product.title.slice(0, 10)}...</p>
      <p className={styles.shopNow}>Shop Now!</p>
      <p className={styles.category}>{product.category}</p>
    </Link>
    
  );
}

export default EachProduct;
