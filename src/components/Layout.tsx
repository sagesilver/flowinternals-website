import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/shared.css';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <nav className="nav">
        <div className="container nav-container">
          <Link to="/">
            <img src="/lovable-uploads/a4fc7853-2ebb-4b66-bb30-8a3a378f59d3.png" alt="flowinternals logo" className="logo" />
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <a href="/#testimonials" className="nav-link">Testimonials</a>
            <Link to="/pricing" className="nav-link">Pricing</Link>
          </div>
          <div className="nav-buttons">
            <Link to="/login" className="button button-outline">Sign In</Link>
            <Link to="/register" className="button button-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      <header className="header">
        <div className="container">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </header>

      <main className="container">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <Link to="/" className="button button-primary">Back to Home</Link>
        </div>
      </footer>
    </>
  );
};

export default Layout; 