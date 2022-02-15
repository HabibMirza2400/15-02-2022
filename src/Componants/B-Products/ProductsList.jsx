import React, { useState, useEffect } from 'react';
import ProductCards from './ProductCards';
import axios from 'axios';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const getProduct = async () => {
        const apiData = await axios.get("https://fakestoreapi.com/products");
        // console.log(apiData);
        setProducts(apiData.data)
    };
    useEffect(() => {
        getProduct();
    }, [])
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((item) => {
                return (
                    <ProductCards item={item} />
                )
            })}
        </div>
    );
};

export default ProductsList;