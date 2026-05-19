import React from 'react';
import BlurText from '../ui/BlurText';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img 
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
        alt="Modern luxury home exterior at twilight" 
        className="hero-bg" 
      />
      <div className="hero-overlay"></div>
      
      <div className="hero-content" style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ width: '100%', marginBottom: '1rem' }}>
          <BlurText as="h1" text="Building Modern Spaces with Trust & Quality" className="heading-1" delay={30} animateBy="words" direction="bottom" />
        </div>
        <div style={{ width: '100%', marginBottom: '2.5rem' }}>
          <BlurText as="p" text="Creating architectural masterpieces that stand the test of time, blending aesthetic elegance with uncompromising structural integrity." delay={50} animateBy="words" direction="bottom" />
        </div>
        <a href="#contact" className="btn btn-primary" style={{ display: 'inline-flex', boxShadow: '0 4px 14px rgba(197, 168, 128, 0.4)' }}>Book a Call</a>
      </div>
    </section>
  );
};

export default Hero;
