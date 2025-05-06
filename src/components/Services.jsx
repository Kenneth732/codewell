import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import "../styles/Services.css"

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = []; // Clear on each render to avoid duplication

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Section fade-in
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      // opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    // Split and animate title
    const split = new SplitType(titleRef.current, { types: 'chars' });
    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      y: 30,
      // opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });

    // Animate each card
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        // opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out',
      });

      gsap.to(card, {
        y: -15,
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: <FontAwesomeIcon icon={faPalette} size="2x" />,
      title: 'Premium Design',
      description: 'Exquisitely crafted interfaces with meticulous attention to detail, delivering unparalleled visual experiences.',
      features: ['UI/UX Design', 'Brand Identity', 'Motion Design', 'Design Systems'],
    },
    {
      icon: <FontAwesomeIcon icon={faCode} size="2x" />,
      title: 'Elite Development',
      description: 'Cutting-edge web solutions built with precision engineering and the latest technologies for flawless performance.',
      features: ['Web Applications', 'E-Commerce', 'API Integration', 'Headless CMS'],
    },
    {
      icon: <FontAwesomeIcon icon={faRocket} size="2x" />,
      title: 'Performance Optimization',
      description: 'Lightning-fast experiences optimized for speed, accessibility, and search engine visibility.',
      features: ['Speed Optimization', 'SEO Strategy', 'Accessibility Audit', 'Analytics Integration'],
    },
  ];

  return (
    <section className="luxury-services" ref={sectionRef} id="services">
      <div className="portfolio-container">
        {/* Decorative elements */}
        <div className="luxury-services-ornament luxury-services-ornament-1"></div>
        <div className="luxury-services-ornament luxury-services-ornament-2"></div>

        {/* Section header */}
        <div className="luxury-services-header">
          <h2 className="luxury-services-title" ref={titleRef}>
            <span className="luxury-highlight">Curated</span> Services
          </h2>
          <p className="luxury-services-subtitle">
            Bespoke solutions tailored for discerning clients who demand excellence
          </p>
        </div>

        {/* Services grid */}
        <div className="luxury-services-grid">
          {services.map((service, index) => (
            <div className="luxury-service-card" key={index} ref={addToCardsRef}>
              <div className="luxury-service-card-decoration"></div>

              <div className="luxury-service-icon-wrapper">
                <div className="luxury-service-icon-bg"></div>
                <div className="luxury-service-icon">{service.icon}</div>
              </div>

              <h3 className="luxury-service-card-title">{service.title}</h3>
              <p className="luxury-service-card-description">{service.description}</p>

              <ul className="luxury-service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="luxury-service-feature">
                    <span className="luxury-service-feature-marker"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="luxury-service-card-hover"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="luxury-services-cta">
          <p className="luxury-services-cta-text">Ready to elevate your digital presence?</p>
          <a href="#contact" className="luxury-btn luxury-btn-secondary">
            <span className="luxury-btn-text">Discuss Your Project</span>
            <span className="luxury-btn-hover"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
