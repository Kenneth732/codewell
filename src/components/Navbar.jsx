// src/components/LuxuryNavbar.jsx
import { useState, useEffect, useRef } from 'react';
import 'animate.css';
import '../styles/Navbar.css';

const LuxuryNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active link based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMobileMenu = (section) => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
    setActiveLink(section);
  };

  return (
    <nav 
      ref={navbarRef}
      className={`luxury-navbar ${scrolled ? 'scrolled' : ''} animate__animated animate__fadeIn`}
      data-aos="fade-down"
    >
      <div className="luxury-navbar-container">
        {/* Logo with animated gradient */}
        <a 
          href="#home" 
          className="luxury-navbar-logo animate__animated animate__fadeIn"
          onClick={() => closeMobileMenu('home')}
        >
          <span className="luxury-logo-text">Dr.Codewell</span>
          <span className="luxury-logo-dot"></span>
        </a>

        {/* Main navigation */}
        <ul className={`luxury-navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <li className="luxury-navbar-item" key={item}>
              <a 
                href={`#${item}`}
                className={`luxury-navbar-link ${activeLink === item ? 'active' : ''}`}
                onClick={() => closeMobileMenu(item)}
              >
                <span className="luxury-link-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <span className="luxury-link-hover"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Contact CTA with floating animation */}
        <div className="luxury-navbar-cta-container">
          <a 
            href="#contact" 
            className="luxury-navbar-cta animate__animated animate__pulse animate__infinite"
            onClick={() => closeMobileMenu('contact')}
          >
            <span>Get in Touch</span>
            <div className="luxury-cta-arrow">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Hamburger menu with animation */}
        <div 
          className={`luxury-navbar-toggle ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="luxury-bar luxury-bar-1"></span>
          <span className="luxury-bar luxury-bar-2"></span>
          <span className="luxury-bar luxury-bar-3"></span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="luxury-navbar-decoration">
        <div className="luxury-decoration-line"></div>
      </div>
    </nav>
  );
};

export default LuxuryNavbar;