import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../styles/Footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const columnsRef = useRef([]);
  const addToColumnsRef = (el) => {
    if (el && !columnsRef.current.includes(el)) {
      columnsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.from(footerRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      // opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(columnsRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 30,
      // opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer className="luxury-footer" ref={footerRef}>
      <div className="luxury-footer-ornament luxury-footer-ornament-1"></div>
      <div className="luxury-footer-ornament luxury-footer-ornament-2"></div>

      <div className="footer-container">
        <div className="luxury-footer-grid">

          {/* Brand column */}
          <div className="luxury-footer-column luxury-footer-brand" ref={addToColumnsRef}>
            <h2 className="luxury-footer-logo">Dr.Codewell</h2>
            <p className="luxury-footer-tagline">
              Crafting digital excellence for the discerning client
            </p>

            <div className="luxury-footer-social">
              <a href="#" className="luxury-footer-social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f luxury-footer-social-icon"></i>
              </a>
              <a href="#" className="luxury-footer-social-link" aria-label="Instagram">
                <i className="fab fa-instagram luxury-footer-social-icon"></i>
              </a>
              <a href="#" className="luxury-footer-social-link" aria-label="Twitter">
                <i className="fab fa-twitter luxury-footer-social-icon"></i>
              </a>
              <a href="#" className="luxury-footer-social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in luxury-footer-social-icon"></i>
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div className="luxury-footer-column" ref={addToColumnsRef}>
            <h3 className="luxury-footer-column-title">Navigation</h3>
            <ul className="luxury-footer-links">
              <li><a href="#home" className="luxury-footer-link">Home</a></li>
              <li><a href="#services" className="luxury-footer-link">Services</a></li>
              <li><a href="#portfolio" className="luxury-footer-link">Portfolio</a></li>
              <li><a href="#testimonials" className="luxury-footer-link">Testimonials</a></li>
              <li><a href="#contact" className="luxury-footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Services column */}
          <div className="luxury-footer-column" ref={addToColumnsRef}>
            <h3 className="luxury-footer-column-title">Services</h3>
            <ul className="luxury-footer-links">
              <li><a href="#" className="luxury-footer-link">Luxury Web Design</a></li>
              <li><a href="#" className="luxury-footer-link">Premium Development</a></li>
              <li><a href="#" className="luxury-footer-link">Brand Identity</a></li>
              <li><a href="#" className="luxury-footer-link">E-Commerce Solutions</a></li>
              <li><a href="#" className="luxury-footer-link">Performance Optimization</a></li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="luxury-footer-column" ref={addToColumnsRef}>
            <h3 className="luxury-footer-column-title">Contact</h3>
            <address className="luxury-footer-contact">
              <p className="luxury-footer-contact-item">
                <span className="luxury-footer-contact-label">Email:</span>
                <a href="mailto:contact@luxurydesign.com" className="luxury-footer-contact-link">
                  kennethmburu21@gmail.com
                </a>
              </p>
              <p className="luxury-footer-contact-item">
                <span className="luxury-footer-contact-label">Phone:</span>
                <a href="tel:+11234567890" className="luxury-footer-contact-link">
                  +254 742-164-615
                </a>
              </p>
              <p className="luxury-footer-contact-item">
                <span className="luxury-footer-contact-label">Address:</span>
                <span className="luxury-footer-contact-text">
                  123 Premium Avenue, Suite 100<br />
                  New York, NY 10001
                </span>
              </p>
            </address>

            <button className="luxury-footer-button">
              Schedule Consultation
              <i className="fas fa-arrow-right luxury-footer-button-icon" />
            </button>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="luxury-footer-bottom">
          <p className="luxury-footer-copyright">
            © {new Date().getFullYear()} Dream Craft Studio. All rights reserved.
          </p>
          <div className="luxury-footer-legal">
            <a href="#" className="luxury-footer-legal-link">Privacy Policy</a>
            <a href="#" className="luxury-footer-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
