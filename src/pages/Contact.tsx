import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const { theme } = useTheme();
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

  const getContainerClass = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-gray-50 min-h-screen font-sans';
      case 'theme2':
        return 'bg-gray-800 min-h-screen font-serif flex';
      case 'theme3':
        return 'bg-gradient-to-br from-yellow-100 to-pink-100 min-h-screen font-serif';
      default:
        return 'bg-gray-50 min-h-screen';
    }
  };

  const getMainClass = () => {
    switch (theme) {
      case 'theme1':
        return 'pt-20 px-4 max-w-6xl mx-auto';
      case 'theme2':
        return 'flex-1 pt-20 px-6';
      case 'theme3':
        return 'pt-20 px-4 max-w-7xl mx-auto';
      default:
        return 'pt-20 px-4 max-w-6xl mx-auto';
    }
  };

  const getTitleClass = () => {
    switch (theme) {
      case 'theme1':
        return 'text-3xl font-light text-gray-800 mb-4';
      case 'theme2':
        return 'text-4xl font-bold text-white mb-6';
      case 'theme3':
        return 'text-4xl font-bold text-purple-800 mb-6 text-center';
      default:
        return 'text-3xl font-light text-gray-800 mb-4';
    }
  };

  const getTextClass = () => {
    switch (theme) {
      case 'theme1':
        return 'text-gray-600 leading-relaxed mb-6';
      case 'theme2':
        return 'text-gray-300 leading-loose mb-8 text-lg';
      case 'theme3':
        return 'text-purple-700 leading-relaxed mb-8 text-center text-lg';
      default:
        return 'text-gray-600 leading-relaxed mb-6';
    }
  };

  const getButtonClass = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors';
      case 'theme2':
        return 'bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all';
      case 'theme3':
        return 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105';
      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors';
    }
  };

  const getProductsClass = () => {
    switch (theme) {
      case 'theme1':
        return 'mt-12 space-y-6';
      case 'theme2':
        return 'mt-16 space-y-8';
      case 'theme3':
        return 'mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
      default:
        return 'mt-12 space-y-6';
    }
  };

  const getProductCardClass = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow';
      case 'theme2':
        return 'bg-gray-700 p-6 rounded-lg border border-gray-600 hover:bg-gray-600 transition-colors';
      case 'theme3':
        return 'bg-white p-6 rounded-2xl shadow-xl border-2 border-pink-200 hover:shadow-2xl hover:scale-105 transition-all transform';
      default:
        return 'bg-white p-6 rounded-lg shadow-sm border';
    }
  };

  const getProductTitleClass = () => {
    switch (theme) {
      case 'theme1':
        return 'text-lg font-medium text-gray-800 mb-2';
      case 'theme2':
        return 'text-xl font-bold text-white mb-3';
      case 'theme3':
        return 'text-xl font-bold text-purple-800 mb-3';
      default:
        return 'text-lg font-medium text-gray-800 mb-2';
    }
  };

  const getProductTextClass = () => {
    switch (theme) {
      case 'theme1':
        return 'text-gray-600 text-sm mb-3';
      case 'theme2':
        return 'text-gray-300 mb-4';
      case 'theme3':
        return 'text-purple-600 mb-4';
      default:
        return 'text-gray-600 text-sm mb-3';
    }
  };

  const getSidebarClass = () => {
    if (theme !== 'theme2') return 'hidden';
    return 'w-64 bg-gray-900 border-r border-gray-700 p-6 pt-20';
  };

  const getSidebarItemClass = () => {
    return 'block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded mb-2 transition-colors';
  };

  return (
    <div className={`transition-all duration-500 ${getContainerClass()}`}>
      <div className={getSidebarClass()}>
        <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
        <a href="#" className={getSidebarItemClass()}>Dashboard</a>
        <a href="#" className={getSidebarItemClass()}>Products</a>
        <a href="#" className={getSidebarItemClass()}>Settings</a>
        <a href="#" className={getSidebarItemClass()}>Help</a>
      </div>

      <main className={getMainClass()}>
        <h1 className={getTitleClass()}>Welcome to ThemeApp</h1>
        
        <p className={getTextClass()}>
          Experience the power of dynamic theming with our multi-theme switcher application. 
          Each theme provides a unique visual experience with different layouts, fonts, and color schemes.
        </p>

        <button className={getButtonClass()}>
          Get Started
        </button>

        <div className={getProductsClass()}>
          {loading ? (
            <div className={getTextClass()}>Loading products...</div>
          ) : (
            products.map((product) => (
              <div key={product.id} className={getProductCardClass()}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className={getProductTitleClass()}>
                  {product.title}
                </h3>
                <p className={getProductTextClass()}>
                  {product.description.substring(0, 100)}...
                </p>
                <div className={theme === 'theme2' ? 'text-yellow-400 font-bold text-xl' : theme === 'theme3' ? 'text-pink-600 font-bold text-xl' : 'text-blue-600 font-semibold'}>
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