import React from 'react';
import NavigationBar from '../A-Na vigation/NavigationBar';
import ProductsList from '../B-Products/ProductsList';
import CardItems from '../C-Cards/CardItems';
import ProductDetails from "../D-Details/ProductDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Landing = () => {
    return (
        <div>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<ProductsList />} />
                    <Route path="Cart" element={<CardItems />} />
                    <Route path="Details" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Landing;