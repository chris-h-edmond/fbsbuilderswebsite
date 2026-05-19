import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/${targetId}`);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        // Adjust for navbar height (approx 80px)
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'glass' : ''}`} style={{
      background: isScrolled ? 'var(--color-glass)' : 'transparent',
      boxShadow: isScrolled ? 'var(--shadow-md)' : 'none'
    }}>
      <Link to="/" className="logo">FBS Builders</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
        <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
        <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Portfolio</a>
        <Link to="/gallery" className="nav-link">Gallery</Link>
      </div>
      <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')} style={{ display: 'inline-flex', boxShadow: '0 4px 14px rgba(197, 168, 128, 0.4)' }}>Book a Call</a>
      
      {/* Mobile Menu Toggle (simplified logic for now) */}
      <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none' }}>
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
};

export default Navbar;
