import 'animate.css';
import '../styles/About.css';
import { useEffect } from 'react';
import Me from "../assets/me.jpg"

const About = () => {
  useEffect(() => {
    // Animation triggers for scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-content > *').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      {/* Luxury Background Elements */}
      <div className="about-gold-accent"></div>
      <div className="about-diamond-pattern"></div>
      
      {/* Main Content Container */}
      <div className="about-container">
        {/* Animated Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="gold-text">About</span> Me
          </h2>
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-diamond"></div>
            <div className="divider-line"></div>
          </div>
          <p className="section-subtitle">
            Crafting exceptional digital experiences with precision and passion
          </p>
        </div>

        {/* About Content with Staggered Animations */}
        <div className="about-content">
          <div className="about-image-container">
            <div className="image-frame">
              <div className="frame-ornament top-left"></div>
              <div className="frame-ornament top-right"></div>
              <div className="frame-ornament bottom-left"></div>
              <div className="frame-ornament bottom-right"></div>
              <img 
                src={Me} 
                alt="Professional Portrait" 
                className="about-image"
              />
            </div>
            <div className="image-accent"></div>
          </div>

          <div className="about-text">
            <h3 className="about-heading">
              <span className="gold-underline">Professional</span> Designer & Developer
            </h3>
            <p className="about-description">
              With over a decade of experience in creating premium digital products, 
              I specialize in crafting interfaces that blend aesthetic elegance with 
              flawless functionality. My approach combines meticulous attention to 
              detail with innovative problem-solving.
            </p>
            <p className="about-description">
              I've had the privilege of working with luxury brands and high-profile 
              clients worldwide, delivering solutions that exceed expectations and 
              stand the test of time.
            </p>
            
            {/* Skills with Animated Progress Bars */}
            <div className="skills-container">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">UI/UX Design</span>
                  <span className="skill-percent">95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Frontend Development</span>
                  <span className="skill-percent">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Brand Identity</span>
                  <span className="skill-percent">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            {/* Luxury Signature */}
            <div className="signature-container">
              <img src="/path-to-signature.png" alt="Signature" className="signature" />
              <div className="signature-accent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="floating-diamond-1"></div>
      <div className="floating-diamond-2"></div>
      <div className="floating-circle"></div>
    </section>
  );
};

export default About;