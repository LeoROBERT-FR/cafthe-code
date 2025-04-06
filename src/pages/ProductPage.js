import React from 'react';
import ProductList from "../components/ProductList";

function ProductPage(props) {
    return (
        <div>
            <h1>Liste de nos produits : </h1>
            <ProductList />
        </div>
    );
}

export default ProductPage;