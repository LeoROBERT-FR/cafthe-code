import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/Card.css";

function ProductDetails() {
    const { id } = useParams();
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(
                    `https://api-cafthe.leo.robert.dev-campus.fr/api/products/${id}`,
                );
                console.log(response.data);
                setProduits(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits. ", error);
            }
        };
        void fetchProduits();
    }, [id]);

    return (
        <div>
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <div
                        className={`product-card product-card-${produits.tag}`}
                        style={{
                            width: "95%",
                            marginBottom: "5px",
                            height: "fit-content",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    textAlign: "start",
                                    margin: "10px 5px",
                                    width: "100%",
                                }}
                            >
                                <Link to={`/products`} className="btn btn2R">
                                    ◀︎ Retour
                                </Link>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <div>
                                    <h2>{produits.Titre_Produit}</h2>
                                </div>
                                <div>
                                    <p>Prix : {produits.Prix_Unitaire_Produit} €</p>
                                    <p>{produits.Description_Produit}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;