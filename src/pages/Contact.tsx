import React, { useState } from 'react';

const Contact: React.FC = () => {
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
    <div className="page-container">
      <div className="sidebar">
        <h3 className="sidebar-title">Contact Info</h3>
        <a href="#" className="sidebar-link">Email</a>
        <a href="#" className="sidebar-link">Phone</a>
      </div>
      
      <main className="main-content">
        <h1 className="page-title">Contact Us</h1>
        
        <p className="page-description">
          We would love to hear from you! Feel free to reach out using the form below.
        </p>

        <div className="content-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="form-input form-textarea"
                placeholder="Your message here..."
                required
              />
            </div>

            <button type="submit" className="primary-button">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info-grid">
          <div className="content-card">
            <h3 className="card-title">Email</h3>
            <p className="card-description">hello@themeapp.com</p>
          </div>

          <div className="content-card">
            <h3 className="card-title">Phone</h3>
            <p className="card-description">+1 (555) 123-4567</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;