import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styles from "../../ShopProducts.module.css";
import FormInputs from './FormInputs';

function EactProduct() {
  const {id} = useParams();
  const [product,setProduct] = useState({});
  const [enableSave,setEnableSave] = useState(true);
  let productListLocalStorage = localStorage.getItem("productList");

  useEffect(() => {
    setProduct(JSON.parse(localStorage.getItem("productList")).find(product => {
      return product.id === id;
    }))
  },[])

  useEffect(() => {
    
    setEnableSave(false);
  },[product])

  const handleInput = (e) => {
    setProduct(() => {
      return {...product,[e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEnableSave(true)
    productListLocalStorage = productListLocalStorage
      ? JSON.parse(productListLocalStorage)
      : [];
    productListLocalStorage = productListLocalStorage.map(products => {
      if(products.id === id) {
        return product
      }
      return products
    });
    localStorage.setItem("productList",JSON.stringify(productListLocalStorage));
  };

  const saveHandler = () => {
    // localStorage.setItem(
    //   "productList",
    //   JSON.stringify(productListLocalStorage)
    // );

    // setProductsList(productListLocalStorage);
    // setAddProduct(form);
    // setConfirm(false);
    // console.log(addProduct);
  };

  return (
    <div>
      <div className={styles.blurBox}>
          <h2>Edit {product.productName} stock</h2>

          <form onSubmit={submitHandler} method="post" autoComplete="off">
            <FormInputs addProduct={product} handleInput={handleInput} disable={true}/>
            <div className={styles.formButtonsContainer}>
              <button disabled={enableSave} onClick={saveHandler}>
                save
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default EactProduct;