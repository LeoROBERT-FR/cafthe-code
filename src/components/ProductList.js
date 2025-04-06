import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from "./ProductCard";
import "../styles/Liste.css"

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://api-cafthe.leo.robert.dev-campus.fr/api/products/`)
                setProducts(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits. ", error);
            }
        }
        void fetchProducts();
    }, [])

    return (
        <div style={{display: 'flex', alignItems:"center", flexDirection: 'column'}}>
            <h2>Nos Produits : </h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard product={product} key={`${product.Id_Produit}`} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;