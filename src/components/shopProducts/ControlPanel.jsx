import React, { useState, useEffect, useMemo } from "react";
import FormInputs from "./FormInputs";
import styles from "../../ShopProducts.module.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function ControlPanel() {
  const [showAddProducts, setShowAddProducts] = useState(true);
  const [showEditProducts, setShowEditProducts] = useState(false);
  const [productsList, setProductsList] = useState(() => []);
  const [isConfirm, setConfirm] = useState(false);
  const form = {
    id: "",
    barcode: "a",
    productName: "b",
    productPrice: "1",
    productQuantity: "2",
    productDiscount: "3",
    procuctManufactureDate: "2010-04-01",
    productExpiryDate: "2010-04-02",
  };
  const [addProduct, setAddProduct] = useState(form);
  const [editLoading, setEditLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  let productListLocalStorage = localStorage.getItem("productList");
  let showEditProductSection = localStorage.getItem("showEditProductSection");

  useEffect(() => {
    setProductsList(JSON.parse(productListLocalStorage));
    setTotalProducts(productsList.length);
    if (productsList.length !== 0) {
      setEditLoading(false);
    }
  }, [addProduct, showAddProducts]);

  const showAddProductsHandler = () => {
    if (showEditProducts) {
      setShowEditProducts(false);
    }
    setShowAddProducts(true);
  };

  console.log(showEditProducts);

  const showEditProductsHandler = () => {
    if (showAddProducts) {
      setShowAddProducts(false);
    }
    setShowEditProducts(true);
  };

  const handleInput = (e) => {
    setAddProduct((prevAddProduct) => {
      return { ...prevAddProduct, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setAddProduct((prevAddProduct) => {
      return { ...prevAddProduct, id: uuidv4() };
    });
  };

  const confirmHandler = () => {
    setConfirm(true);
  };

  const saveHandler = () => {
    console.log(totalProducts);
    productListLocalStorage = productListLocalStorage
      ? JSON.parse(productListLocalStorage)
      : [];
    productListLocalStorage = [...productListLocalStorage, addProduct];
    localStorage.setItem(
      "productList",
      JSON.stringify(productListLocalStorage)
    );

    setProductsList(productListLocalStorage);
    setAddProduct(form);
    setConfirm(false);
    console.log(addProduct);
  };

  return (
    <div className={styles.controlPanelContainer}>
      <h1>Control Panel</h1>
      <div className={styles.mainButtonsContainer}>
        <button onClick={showAddProductsHandler}>add products</button>
        <button onClick={showEditProductsHandler}>edit products</button>
      </div>

      {showAddProducts && (
        <div className={styles.blurBox}>
          <h2>Add Products</h2>
          <form onSubmit={submitHandler} method="post" autoComplete="off">
            <FormInputs addProduct={addProduct} handleInput={handleInput} />
            <div className={styles.formButtonsContainer}>
              <button onClick={confirmHandler}>confirm</button>
              <span>click save after confirm</span>
              <button disabled={!isConfirm} onClick={saveHandler}>
                save
              </button>
            </div>
          </form>
        </div>
      )}

      {!showAddProducts &&
        (editLoading ? (
          "loading"
        ) : (
          <div>
            <h2>Edit Product</h2>
            <p>total products {totalProducts}</p>
            {productsList.map((product) => {
              return (
                <div key={product.id}>
                  <Link to={`${product.id}`}>
                    {product.productName}
                  </Link>
                </div>
              );
            })}
          </div>
        ))}
    </div>
  );
}

export default ControlPanel;
