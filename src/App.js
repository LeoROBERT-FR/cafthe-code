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
import ProductList from "./components/ProductList";

const App = () => {
    return (
        <BR>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </BR>
    );
};

export default App;