import React from 'react';
import BlurText from '../ui/BlurText';

const Services = () => {
  return (
    <section id="services" className="section container" style={{ backgroundColor: 'var(--color-bg-alt)', borderRadius: 'var(--radius-xl)' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <BlurText as="h2" text="Our Capabilities" className="heading-2" delay={50} animateBy="words" direction="bottom" />
        <BlurText as="p" text="Comprehensive solutions from blueprint to final walkthrough." className="subtitle" delay={100} animateBy="words" direction="bottom" />
      </div>

      <div className="network-container">
        <div className="node node-center animate-float" style={{ animationDelay: '0s' }}>FBS Builders</div>
        
        {/* Nodes positioned in a circle roughly */}
        <div className="node animate-float" style={{ top: '15%', left: '20%', animationDelay: '1s' }}>Residential Construction</div>
        <div className="node animate-float" style={{ top: '15%', right: '20%', animationDelay: '2s' }}>Commercial Projects</div>
        <div className="node animate-float" style={{ top: '50%', left: '10%', transform: 'translateY(-50%)', animationDelay: '3s' }}>Interior Design</div>
        <div className="node animate-float" style={{ top: '50%', right: '10%', transform: 'translateY(-50%)', animationDelay: '0.5s' }}>Renovation</div>
        <div className="node animate-float" style={{ bottom: '15%', left: '25%', animationDelay: '1.5s' }}>Architecture Planning</div>
        <div className="node animate-float" style={{ bottom: '15%', right: '25%', animationDelay: '2.5s' }}>Turnkey Solutions</div>

        {/* Fake connecting lines using SVG for exact routing */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="5,5" />
          <circle cx="50%" cy="50%" r="300" fill="none" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="2,8" opacity="0.5" />
          
          <line x1="50%" y1="50%" x2="30%" y2="25%" stroke="var(--color-border)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="70%" y2="25%" stroke="var(--color-border)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="var(--color-border)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="var(--color-border)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="35%" y2="75%" stroke="var(--color-border)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="65%" y2="75%" stroke="var(--color-border)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
};

export default Services;
