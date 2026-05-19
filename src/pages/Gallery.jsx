import React from 'react';
import Masonry from '../components/ui/Masonry';
import BlurText from '../components/ui/BlurText';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const items = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      url: "#",
      height: 400,
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      url: "#",
      height: 250,
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop",
      url: "#",
      height: 600,
    },
    {
      id: "4",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      url: "#",
      height: 350,
    },
    {
      id: "5",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      url: "#",
      height: 500,
    },
    {
      id: "6",
      img: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
      url: "#",
      height: 300,
    },
    {
      id: "7",
      img: "https://images.unsplash.com/photo-1511852150379-b1d3ef13eec6?q=80&w=2070&auto=format&fit=crop",
      url: "#",
      height: 450,
    },
    {
      id: "8",
      img: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=2070&auto=format&fit=crop",
      url: "#",
      height: 550,
    },
  ];

  return (
    <div className="section" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px' }}>
      <div style={{ padding: '0 5%', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', textDecoration: 'none', color: 'var(--color-text-light)', fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.3s' }} onMouseOver={(e) => e.currentTarget.style.opacity = 1} onMouseOut={(e) => e.currentTarget.style.opacity = 0.8}>
          <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to Home
        </Link>
        <div style={{ width: '100%', marginBottom: '0.5rem' }}>
          <BlurText as="h1" text="Full Gallery" className="heading-2" delay={50} animateBy="words" direction="bottom" />
        </div>
        <div style={{ width: '100%' }}>
          <BlurText as="p" text="Explore our complete portfolio of architectural excellence." className="subtitle" delay={100} animateBy="words" direction="bottom" />
        </div>
      </div>
      
      <div style={{ width: '100%', height: '80vh', padding: '0 5%' }}>
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </div>
  );
};

export default Gallery;
