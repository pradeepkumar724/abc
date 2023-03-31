import React,{useEffect,useState} from 'react';
import styles from '../../amazonShowProductsStyles.module.css';
import ShowProductPage from './ShowProductPage';
import { Routes,Route } from 'react-router-dom';
import Products from './Products';

function AmazonShowProducts() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/:id" element={<ShowProductPage/>}/>
            </Routes>
        </div>
    )
}

export default AmazonShowProducts;