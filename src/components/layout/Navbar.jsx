import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'glass' : ''}`} style={{
      background: isScrolled ? 'var(--color-glass)' : 'transparent',
      boxShadow: isScrolled ? 'var(--shadow-md)' : 'none'
    }}>
      <div className="logo">FBS Builders</div>
      <div className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <button className="btn btn-primary" style={{ display: 'none' /* hidden on mobile natively */ }}>Book a Free Call</button>
      
      {/* Mobile Menu Toggle (simplified logic for now) */}
      <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none' }}>
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
};

export default Navbar;
