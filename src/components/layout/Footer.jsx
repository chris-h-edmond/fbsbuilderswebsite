import React from 'react';

const Footer = () => (
  <footer style={{ backgroundColor: 'var(--color-text)', color: 'white', padding: '4rem 5% 2rem', borderTopLeftRadius: 'var(--radius-xl)', borderTopRightRadius: 'var(--radius-xl)' }}>
    <div className="container flex" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem', marginBottom: '2rem' }}>
      <div>
        <div className="logo" style={{ marginBottom: '1rem' }}>FBS Builders</div>
        <p style={{ opacity: 0.7, maxWidth: '300px' }}>Premium modern spaces engineered for tomorrow. Precision, luxury, and architectural integrity.</p>
      </div>
      <div>
        <h4 style={{ fontFamily: 'var(--font-sans)', marginBottom: '1rem', fontSize: '1.2rem' }}>Quick Links</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.7 }}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
      &copy; {new Date().getFullYear()} FBS Builders. All rights reserved.
    </div>
  </footer>
);

export default Footer;
