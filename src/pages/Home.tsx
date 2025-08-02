import React, { useState, useEffect } from 'react';
import { Product, fetchProducts } from '../utils/data';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="page-container">
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