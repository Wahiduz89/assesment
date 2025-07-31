import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { theme, getThemeClasses } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Demo only)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={`transition-all duration-500 ${getThemeClasses('container')}`}>
      {theme === 'theme2' && (
        <div className="w-64 bg-gray-900 border-r border-gray-700 p-6 pt-20">
          <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded mb-2 transition-colors">Email</a>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded mb-2 transition-colors">Phone</a>
        </div>
      )}
      
      <main className={getThemeClasses('main')}>
        <h1 className={getThemeClasses('title')}>Contact Us</h1>
        
        <p className={getThemeClasses('paragraph')}>
          We would love to hear from you! Feel free to reach out using the form below.
        </p>

        <div className={getThemeClasses('card')}>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className={getThemeClasses('label')}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={getThemeClasses('input')}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className={getThemeClasses('label')}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={getThemeClasses('input')}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className={getThemeClasses('label')}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={getThemeClasses('input')}
                placeholder="Your message here..."
                required
              />
            </div>

            <button type="submit" className={getThemeClasses('button')}>
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={getThemeClasses('card')}>
            <h3 className={theme === 'theme2' ? 'text-xl font-bold text-white mb-3' : theme === 'theme3' ? 'text-xl font-bold text-purple-800 mb-3' : 'text-xl font-semibold text-gray-800 mb-3'}>
              Email
            </h3>
            <p className={theme === 'theme2' ? 'text-gray-300' : theme === 'theme3' ? 'text-purple-700' : 'text-gray-600'}>
              hello@themeapp.com
            </p>
          </div>

          <div className={getThemeClasses('card')}>
            <h3 className={theme === 'theme2' ? 'text-xl font-bold text-white mb-3' : theme === 'theme3' ? 'text-xl font-bold text-purple-800 mb-3' : 'text-xl font-semibold text-gray-800 mb-3'}>
              Phone
            </h3>
            <p className={theme === 'theme2' ? 'text-gray-300' : theme === 'theme3' ? 'text-purple-700' : 'text-gray-600'}>
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;