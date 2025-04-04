import React from 'react';
import "../styles/Card.css";
import {Link} from "react-router-dom";

function ProductCard(product) {
    return (
        <div className="products">
            <div key={product.product.Id_Article} className="product-item">
                <h3>{product.product.Designation_Article}</h3>
                <p>{product.product.Description_Article}</p>
                <p>Prix: {product.product.Prix_unitaire_Article}€</p>
                    <Link to={`/products/${product.product.Id_Article}`}>
                        <button>Voir Détails</button>
                    </Link>
            </div>
        </div>
    );
}

export default ProductCard;