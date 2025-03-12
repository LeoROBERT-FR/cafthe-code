import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`)
                setProducts(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits", error);
            }
        }
        void fetchProducts();
    }, [])

    return (
        <div className="product-list">
            <h2>Nos Produits</h2>
            {products.map(product => (
                <ProductCard product={product} />
            ))}
        </div>
    );
};

export default ProductList;