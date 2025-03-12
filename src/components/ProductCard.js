import React from 'react';

function ProductCard(product) {
    return (
        <div className="products">
            <div key={product.Id_Article} className="product-item">
                <h3>{product.Designation_Article}</h3>
                <p>{product.Description_Article}</p>
                <p>Prix: {product.Prix_Unitaire_Article}€</p>
            </div>
        </div>
    );
}

export default ProductCard;