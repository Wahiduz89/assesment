import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container">
      <div className="sidebar">
        <h3 className="sidebar-title">Navigation</h3>
        <a href="#" className="sidebar-link">Dashboard</a>
        <a href="#" className="sidebar-link">Products</a>
        <a href="#" className="sidebar-link">Settings</a>
        <a href="#" className="sidebar-link">Help</a>
      </div>

      <main className="main-content">
        <h1 className="page-title">Welcome to ThemeApp</h1>
        
        <p className="page-description">
          Experience the power of dynamic theming with our multi-theme switcher application. 
          Each theme provides a unique visual experience with different layouts, fonts, and color schemes.
        </p>

        <button className="primary-button">
          Get Started
        </button>

        <div className="products-grid">
          {loading ? (
            <div className="loading-text">Loading products...</div>
          ) : (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="product-image"
                />
                <h3 className="product-title">
                  {product.title}
                </h3>
                <p className="product-description">
                  {product.description.substring(0, 100)}...
                </p>
                <div className="product-price">
                  ${product.price}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;