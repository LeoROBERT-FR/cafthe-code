import React from 'react';
import '../styles/Layout.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 CafThé. Tous droits réservés. </p>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="/privacy-policy">Politique de confidentialité</a></li>
                        <li><a href="/terms-of-service">Conditions d'utilisation</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;