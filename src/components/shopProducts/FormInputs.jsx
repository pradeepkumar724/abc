import React from "react";

function FormInputs({ addProduct, handleInput,disable }) {
  return (
    <div>
      <div>
        <input
          required
          type="text"
          disabled={disable}
          placeholder="Scan Barcode"
          name="barcode"
          value={addProduct.barcode}
          onChange={handleInput}
        />

        <input
          required
          disabled={disable}
          type="text"
          placeholder="Product Name"
          name="productName"
          value={addProduct.productName}
          onChange={handleInput}
        />
      </div>

      <div>
        <input
          required
          type="number"
          placeholder="Price"
          name="productPrice"
          value={addProduct.productPrice}
          onChange={handleInput}
        />

        <input
          required
          type="number"
          placeholder="Quantity"
          name="productQuantity"
          value={addProduct.productQuantity}
          onChange={handleInput}
        />
      </div>

      <div>
        <input
          required
          type="number"
          placeholder="Discount"
          name="productDiscount"
          value={addProduct.productDiscount}
          onChange={handleInput}
        />

        <input disabled={true} placeholder="DMART" />
      </div>

      <div>
        <input
          required
          type="date"
          placeholder="Manufacture Date"
          name="procuctManufactureDate"
          value={addProduct.procuctManufactureDate}
          onChange={handleInput}
        />

        <input
          required
          type="date"
          placeholder="Expiry Date"
          name="productExpiryDate"
          value={addProduct.productExpiryDate}
          onChange={handleInput}
        />
      </div>
    </div>
  );
}

export default FormInputs;
