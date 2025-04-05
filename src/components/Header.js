// src/components/Header.js
import React from 'react';
import '../styles/Layout.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Acceuil</Link></li>
                    <li><Link to="/products">Produits</Link></li>
                    <li><Link to="/login">Se Connecter</Link></li>
                    <li><Link to="/register">Se Creer</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;