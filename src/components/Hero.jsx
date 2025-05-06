import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/Hero.css';
import Me from "../assets/me.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Initialize animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Background elements animation
    gsap.fromTo('.luxury-bg-accent', 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: 'elastic.out(1, 0.5)' }
    );

    // Split text for advanced animations
    if (titleRef.current) {
      const splitTitle = new SplitType(titleRef.current, { types: 'chars,words' });
      
      tl.from(splitTitle.chars, {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });
    }

    // Subtle parallax effect for image
    gsap.to(imageRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.luxury-btn');
    buttons.forEach(button => {
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        gsap.to(button, {
          '--x': `${x}px`,
          '--y': `${y}px`,
          duration: 0.3
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="luxury-hero" ref={heroRef}>
      {/* Premium background elements */}
      <div className="luxury-bg-pattern"></div>
      <div className="luxury-bg-accent"></div>
      <div className="luxury-bg-grain"></div>
      
      {/* Floating decorative elements */}
      <div className="luxury-ornament luxury-ornament-1"></div>
      <div className="luxury-ornament luxury-ornament-2"></div>
      <div className="luxury-ornament luxury-ornament-3"></div>
      
      <div className="luxury-container">
        <div className="luxury-content">
          {/* Animated title with decorative elements */}
          <div className="luxury-title-wrapper">
            <div className="luxury-title-decoration"></div>
            <h1 className="luxury-title" ref={titleRef}>
              <span className="luxury-highlight">Crafting</span> Digital<br />
              <span className="luxury-highlight">Masterpieces</span>
            </h1>
          </div>
          
          {/* Elegant subtitle with animated underline */}
          <p className="luxury-subtitle" ref={subtitleRef}>
            Bespoke web experiences tailored for discerning clients
            <span className="luxury-underline"></span>
          </p>
          
          {/* Premium CTA buttons with hover effects */}
          <div className="luxury-cta" ref={ctaRef}>
            <a href="#work" className="luxury-btn luxury-btn-primary">
              <span className="luxury-btn-text">Explore Portfolio</span>
              <span className="luxury-btn-hover"></span>
              <svg className="luxury-btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="luxury-btn luxury-btn-secondary">
              <span className="luxury-btn-text">Begin Project</span>
              <span className="luxury-btn-hover"></span>
            </a>
          </div>
          
          {/* Luxury stats or awards */}
          <div className="luxury-stats">
            <div className="luxury-stat">
              <div className="luxury-stat-number">150+</div>
              <div className="luxury-stat-label">Projects</div>
            </div>
            <div className="luxury-stat">
              <div className="luxury-stat-number">12</div>
              <div className="luxury-stat-label">Awards</div>
            </div>
            <div className="luxury-stat">
              <div className="luxury-stat-number">∞</div>
              <div className="luxury-stat-label">Creativity</div>
            </div>
          </div>
        </div>
        
        {/* Hero image with floating frame effect */}
        <div className="luxury-image-container">
          <div className="luxury-image-wrapper" ref={imageRef}>
            <img 
              src={Me} 
              alt="Premium web designer" 
              className="luxury-image"
            />
            <div className="luxury-image-overlay"></div>
            <div className="luxury-image-frame"></div>
            <div className="luxury-image-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="var(--primary-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Featured Work</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium scroll indicator */}
      <div className="luxury-scroll-indicator">
        <div className="luxury-scroll-text">Scroll</div>
        <div className="luxury-scroll-line"></div>
      </div>
      
      {/* Social proof floating badges */}
      <div className="luxury-social-proof">
        <div className="luxury-social-badge">Trusted by Fortune 500</div>
        <div className="luxury-social-badge">Award-Winning Designs</div>
      </div>
    </section>
  );
};

export default Hero;