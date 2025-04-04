// src/App.js
// npm install web-vitals
// npm install react-scripts
// npm install axios
// npm install react-app-rewired
import React from 'react';
import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import './styles/App.css';
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import ProductPage from "./pages/ProductPage";

const App = () => {
    return (
        <BR>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </BR>
    );
};

export default App;