import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../../amazonShowProductsStyles.module.css';
import { AiFillTag } from 'react-icons/ai';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai'

function ShowProductPage() {
  const {id} = useParams();
  const [products,setProducts] = useState([]);
  const [product,setProduct] = useState({});

  useEffect(() => {
      axios.get("https://fakestoreapi.com/products?limit=10").then(response => {
          if(response.data.length > 0) {
              setProduct({...response.data[id - 1]});
              setProducts([...response.data]);
          }
      });
  },[]);

  return (
    <div className={styles.showProductPage}>
      <div className={styles.imageContainer}>
        <img src={product.image}/>
        <div className={styles.buttonsContainer}>
          <button className={styles.addToCart}><AiOutlineShoppingCart/> add to cart</button>
          <button className={styles.buyNow}><BsFillLightningChargeFill/> buy now</button>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.grayBigText}>{product.category}</p>
        <p className={styles.productTitle}>{product.title}</p>
        <p style={{fontSize: "13px",margin: "8px 0px"}}><span className={styles.greenText}>Special price</span></p>
        <p><span className={styles.price}>₹{String(product.price)}</span> <span className={styles.oldPrice}><strike>₹{String(product.price / 2)}</strike></span> <span className={`${styles.greenText} ${styles.offPrice}`}>50% off</span></p>
        <p className={styles.grayBoldText}><span className={styles.rating} style={{padding: '4px'}}>{product.rating?.rate}<AiFillStar style={{paddingTop: "5px"}}/></span> {product.rating?.count} ratings and {Math.floor(product.rating?.count / 2.3)} reviews</p>
        <p className={styles.boldText}>Available offers</p>
        <p className={styles.offersText}><span className={styles.offersTitle}><AiFillTag/> Special Price</span> Get extra 32% off (price inclusive of cashback/coupon) <span className={styles.blueText}>T&C</span></p>
        <p className={styles.offersText}><span className={styles.offersTitle}><AiFillTag/> Bank Offer</span> 10% off on ICICI Bank Credit Card EMI Transactions, up to ₹1250, on orders of ₹5,000 and above  <span className={styles.blueText}>T&C</span></p>
        <p className={styles.offersText}><span className={styles.offersTitle}><AiFillTag/> Bank OfferFlat</span> ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account  <span className={styles.blueText}>T&C</span></p>
        <p className={styles.offersText}><span className={styles.offersTitle}><AiFillTag/> Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card  <span className={styles.blueText}>T&C</span></p>
        <p className={styles.boldText} style={{margin: "10px 0px 5px 0px"}}>Description:</p>
        <p className={styles.description}>{product.description}</p>
      </div>
    </div>
  )
}

export default ShowProductPage;