import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/*import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue sur notre boutique en ligne !</h1>
        <p>Découvrez nos produits incroyables et nos offres spéciales !</p>
        <button onClick={() => alert('Buy Now !')}>Buy Now !</button>
      </header>
      <main>
        <section className="products">
          <h2>Produits populaires :</h2>
          <div className="product-list">
            <div className="product-item">
              <img src="../assets/images/sachet-café.png" alt="Café Test" />
              <h3>Café Test</h3>
              <p>Prix: 200€</p>
            </div>
            <div className="product-item">
              <img src="../assets/images/sachet-thé.png" alt="Thé Test" />
              <h3>Thé Test</h3>
              <p>Prix: 300€</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 CafThé. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;*/