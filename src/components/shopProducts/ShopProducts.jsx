import React from 'react';
import { Routes,Route } from 'react-router-dom';
import styels from "../../ShopProducts.module.css";
import Home from './Home';
import ControlPanel from './ControlPanel';
import EactProduct from './EactProduct';


function ShopProducts() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/control-panel">
          <Route index element={<ControlPanel/>}/>
          <Route path=":id" element={<EactProduct/>}/>
        </Route>
    </Routes>
  )
}

export default ShopProducts;