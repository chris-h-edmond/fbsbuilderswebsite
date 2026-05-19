import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import BlurText from '../ui/BlurText';

const Projects = () => {
  const trackRef = useRef(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const baseProjects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      location: "Beverly Hills Residence",
      details: "A 10,000 sq ft modern luxury home featuring open concept living and sustainable materials."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      location: "The Glass House, Austin",
      details: "Commercial showroom integrating indoor and outdoor environments seamlessly."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop",
      location: "Coastal Retreat, Malibu",
      details: "Turnkey luxury residential project focusing on panoramic views and minimalist design."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      location: "Alpine Modern, Aspen",
      details: "Architectural planning and execution for a high-altitude luxury cabin."
    }
  ];

  // Triplicate the array for smooth infinite wrapping
  const projects = [...baseProjects, ...baseProjects, ...baseProjects].map((proj, index) => ({
    ...proj,
    uniqueId: `${proj.id}-${index}`
  }));

  useEffect(() => {
    let animationFrameId;
    let scrollPos = trackRef.current ? trackRef.current.scrollLeft : 0;
    
    const scroll = () => {
      if (trackRef.current && !isHovered && !isScrollingRef.current) {
        // Sync scrollPos if user scrolled manually (e.g., via touchpad)
        if (Math.abs(trackRef.current.scrollLeft - scrollPos) > 1) {
            scrollPos = trackRef.current.scrollLeft;
        }

        scrollPos += 0.5; // Slow movement
        
        const children = trackRef.current.children;
        if (children.length >= baseProjects.length * 2) {
          const firstItem = children[0];
          const middleItem = children[baseProjects.length];
          if (firstItem && middleItem) {
            const singleSetWidth = middleItem.offsetLeft - firstItem.offsetLeft;
            
            if (scrollPos >= singleSetWidth) {
              scrollPos -= singleSetWidth;
            }
          }
        }
        
        trackRef.current.scrollLeft = scrollPos;
      } else if (trackRef.current) {
        scrollPos = trackRef.current.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const handleScroll = (dir) => {
    if (trackRef.current) {
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      const scrollAmount = 400 + 32; // card width + gap
      trackRef.current.scrollBy({ left: dir === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
      
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    }
  };

  return (
    <section id="projects" className="section" style={{ paddingLeft: '5%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', paddingRight: '5%' }}>
        <div>
          <BlurText as="h2" text="Featured Projects" className="heading-2" delay={50} animateBy="words" direction="bottom" />
          <BlurText as="p" text="A selection of our finest architectural work." className="subtitle" delay={100} animateBy="words" direction="bottom" />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="carousel-btn" style={{ position: 'relative', left: 0 }} onClick={() => handleScroll('left')}><ChevronLeft /></button>
          <button className="carousel-btn" style={{ position: 'relative', right: 0 }} onClick={() => handleScroll('right')}><ChevronRight /></button>
        </div>
      </div>

      <div className="carousel-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div 
            id="carousel-track" 
            ref={trackRef}
            className="carousel-track" 
            style={{ overflowX: 'auto', scrollbarWidth: 'none' }}
          >
            {projects.map((proj) => (
              <div key={proj.uniqueId} className="project-card">
              <img src={proj.image} alt={proj.location} className="project-img" />
              <div className="project-info">
                <div className="project-label">{proj.location}</div>
                <div className="project-details">
                  <p>{proj.details}</p>
                  <button className="btn btn-outline" style={{ marginTop: '1rem', borderColor: 'white', color: 'white', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>View Gallery <ArrowRight size={14} style={{ marginLeft: '0.5rem' }}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
