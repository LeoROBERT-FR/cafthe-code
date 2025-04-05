import React from 'react';
import "../styles/Card.css";
import {Link} from "react-router-dom";

function ProductCard(product) {
    const data = product.product;
    return (
        <div className="products">
            <div className="product-item">
                <h3>{data.Titre_Produit}</h3>
                <p>{data.Description_Produit}</p>
                <p>Prix: {data.Prix_Unitaire_Produit}€</p>
                    <Link to={`/products/${data.Id_Produit}`}>
                        <button>Voir Détails</button>
                    </Link>
            </div>
        </div>
    );
}

export default ProductCard;