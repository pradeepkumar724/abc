import React,{useCallback, useEffect,useState} from 'react';
import styles from '../../amazonShowProductsStyles.module.css';
import EachProduct from './EachProduct';
import axios from 'axios';

function Products() {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=10").then(response => {
            if(response.data.length > 0) {
                setProducts([...response.data]);
            }
        });
    },[]);

    return (
        <div className={styles.productsContainer}>
            {
                products.map(product => {
                    return (
                        <EachProduct key={product.id} product={product}/>
                    )
                })
            }
        </div>
    )
}

export default Products;