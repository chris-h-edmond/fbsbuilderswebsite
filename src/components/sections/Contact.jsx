import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import BlurText from '../ui/BlurText';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div className="flex" style={{ flexWrap: 'wrap', gap: '4rem' }}>
        
        {/* Left side details */}
        <div style={{ flex: '1 1 400px' }}>
          <h2 className="heading-2">
            <BlurText as="span" text="Let's Build" delay={50} animateBy="words" direction="bottom" />
            <br/>
            <BlurText as="span" text="Something" delay={100} animateBy="words" direction="bottom" />
            {' '}
            <BlurText as="span" text="Great" className="text-gold" delay={150} animateBy="words" direction="bottom" />
          </h2>
          <div style={{ marginBottom: '3rem' }}>
            <BlurText 
              as="p"
              text="Ready to start your next premium project? Reach out to our team to discuss your vision, timeline, and requirements." 
              className="subtitle" 
              delay={30} 
              animateBy="words" 
              direction="bottom" 
            />
          </div>

          <div className="contact-info-card">
            <div className="contact-icon"><Phone size={24} /></div>
            <div>
              <div style={{ fontWeight: 500, fontFamily: 'var(--font-sans)' }}>Call Us</div>
              <div style={{ color: 'var(--color-text-light)' }}>+1 (800) 555-0199</div>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon"><Mail size={24} /></div>
            <div>
              <div style={{ fontWeight: 500, fontFamily: 'var(--font-sans)' }}>Email Us</div>
              <div style={{ color: 'var(--color-text-light)' }}>hello@fbsbuilders.com</div>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon"><MapPin size={24} /></div>
            <div>
              <div style={{ fontWeight: 500, fontFamily: 'var(--font-sans)' }}>Office</div>
              <div style={{ color: 'var(--color-text-light)' }}>123 Architectural Way, Design District, CA 90210</div>
            </div>
          </div>

          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105713.88243306859!2d-118.472061!3d34.053424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc35fbd218ef%3A0xcf1ef9352700d95c!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right side form */}
        <div style={{ flex: '1 1 400px' }}>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="heading-3" style={{ marginBottom: '2rem', fontFamily: 'var(--font-sans)', fontSize: '1.75rem' }}>Send a Message</h3>
            
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email Address" required />
            </div>
            
            <div className="form-group">
              <input type="tel" className="form-control" placeholder="Phone Number" />
            </div>
            
            <div className="form-group">
              <select className="form-control" style={{ appearance: 'none' }}>
                <option value="">Interested In...</option>
                <option value="residential">Residential Construction</option>
                <option value="commercial">Commercial Projects</option>
                <option value="renovation">Renovation</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <textarea className="form-control" placeholder="Tell us about your project..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Submit Inquiry</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
