import React from 'react';
import BlurText from '../ui/BlurText';

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="flex" style={{ flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Stats/Image area */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '400px' }}>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Founder portrait"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="glass-dark" style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Marcus FBS</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>“Driven by craftsmanship, precision, and trust, our vision is to build spaces that inspire generations.”</p>
            </div>
          </div>

        </div>

        {/* Right content area */}
        <div style={{ flex: '1 1 500px' }}>
          <h2 className="heading-2">
            <BlurText as="span" text="Building Legacies," delay={50} animateBy="words" direction="bottom" />
            <br/>
            <BlurText as="span" text="Not Just Structures" className="text-gold" delay={100} animateBy="words" direction="bottom" />
          </h2>
          <div style={{ marginBottom: '2rem' }}>
            <BlurText 
              as="p"
              text="At FBS Builders, we don't just pour concrete; we realize visions. For over a decade, we've partnered with visionary architects and discerning clients to bring premium residential and commercial projects to life." 
              className="subtitle" 
              delay={30} 
              animateBy="words" 
              direction="bottom" 
            />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
            <div className="stat-card glass" style={{ border: '1px solid var(--color-border)' }}>
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card glass" style={{ border: '1px solid var(--color-border)' }}>
              <div className="stat-number">50+</div>
              <div className="stat-label">Architectural Plans</div>
            </div>
            <div className="stat-card glass" style={{ border: '1px solid var(--color-border)' }}>
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card glass" style={{ border: '1px solid var(--color-border)' }}>
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
