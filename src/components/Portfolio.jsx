import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "../styles/Portfolio.css";
import p1 from "../assets/cine.png"
import p2 from "../assets/eco.png"
import p3 from "../assets/pix.png"
import p4 from "../assets/ecommerce.png"
import p5 from "../assets/port.png"

// Sample portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Opulent Estates",
    category: "Web Design",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/585601152784777.6323d515a3c10.png",
    description: "Luxury real estate platform with immersive property showcases",
    tags: ["UI/UX", "React", "Animation"]
  },
  {
    id: 2,
    title: "Elysium Watches",
    category: "E-Commerce",
    image: p4,
    description: "High-end timepiece boutique with 3D product visualization",
    tags: ["Shopify", "3D", "Luxury"]
  },
  {
    id: 3,
    title: "Noble Ventures",
    category: "Branding",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*A1BA_7gK5oMhXXYmtub_iA.jpeg",
    description: "Investment firm identity with premium digital presence",
    tags: ["Branding", "Web Design", "Motion"]
  },
  {
    id: 4,
    title: "Aurelian Resort",
    category: "Web Design",
    image: "https://cdn.dribbble.com/userupload/22799985/file/original-fbf991f6e7e5e2717798ad565c727ee6.png?resize=752x&vertical=center",
    description: "Five-star resort booking experience with virtual tours",
    tags: ["Booking System", "VR", "UI/UX"]
  },
  {
    id: 5,
    title: "Regal Automobiles",
    category: "Web Application",
    image: "https://media.designrush.com/inspiration_images/131660/conversions/_1524087109_783_Land-Rover-Homepage-Website-Design_f3c835d350d8-mobile.jpg",
    description: "Custom configurator for luxury vehicle customization",
    tags: ["3D Configurator", "React", "Animation"]
  },
  {
    id: 6,
    title: "Monarch Jewelry",
    category: "E-Commerce",
    image: p2,
    description: "Exquisite jewelry showcase with augmented reality try-on",
    tags: ["AR", "Shopify Plus", "Luxury"]
  },
  {
    id: 7,
    title: "Monarch Jewelry",
    category: "E-Commerce",
    image: p1,
    description: "Exquisite jewelry showcase with augmented reality try-on",
    tags: ["AR", "Shopify Plus", "Luxury"]
  },
  {
    id: 8,
    title: "Monarch Jewelry",
    category: p2,
    image: p2,
    description: "Exquisite jewelry showcase with augmented reality try-on",
    tags: ["AR", "Shopify Plus", "Luxury"]
  }
];

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    gsap.from(filterRef.current, {
      scrollTrigger: {
        trigger: filterRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 30,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out"
    });

    gsap.from(gridRef.current.children, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleItemHover = (itemId) => setHoveredItem(itemId);
  const handleItemLeave = () => setHoveredItem(null);

  return (
    <section className="luxury-portfolio" ref={sectionRef} id="portfolio">
      <div className="portfolio-container">
        <div className="luxury-portfolio-ornament luxury-portfolio-ornament-1"></div>
        <div className="luxury-portfolio-ornament luxury-portfolio-ornament-2"></div>

        <div className="luxury-portfolio-header">
          <h2 className="luxury-portfolio-title" ref={titleRef}>
            <span className="luxury-highlight">Exquisite</span> Creations
          </h2>
          <p className="luxury-portfolio-subtitle">
            A curated selection of premium digital experiences crafted with precision
          </p>
        </div>

        <div className="luxury-portfolio-filters" ref={filterRef}>
          {categories.map((category) => (
            <button
              key={category}
              className={`luxury-portfolio-filter ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
              {activeFilter === category && (
                <span className="luxury-portfolio-filter-underline"></span>
              )}
            </button>
          ))}
        </div>

        <div className="luxury-portfolio-grid" ref={gridRef}>
          {filteredItems.map((item) => (
            <div 
              className="luxury-portfolio-item" 
              key={item.id}
              onMouseEnter={() => handleItemHover(item.id)}
              onMouseLeave={handleItemLeave}
            >
              <div className="luxury-portfolio-item-image">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="luxury-portfolio-item-img"
                />
                <div className="luxury-portfolio-item-overlay"></div>

                <div className={`luxury-portfolio-item-hover ${hoveredItem === item.id ? 'active' : ''}`}>
                  <h3 className="luxury-portfolio-item-title">{item.title}</h3>
                  <p className="luxury-portfolio-item-category">{item.category}</p>
                  <p className="luxury-portfolio-item-description">{item.description}</p>

                  <div className="luxury-portfolio-item-tags">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="luxury-portfolio-item-tag">{tag}</span>
                    ))}
                  </div>

                  <button className="luxury-portfolio-item-button">
                    View Project
                    <FontAwesomeIcon icon={faArrowRight} className="luxury-portfolio-item-button-icon" />
                  </button>
                </div>
              </div>

              <div className="luxury-portfolio-item-frame"></div>
              <div className="luxury-portfolio-item-badge">
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="luxury-portfolio-cta">
          <p className="luxury-portfolio-cta-text">
            Impressed by our craftsmanship? Let's create something extraordinary together.
          </p>
          <a href="#contact" className="luxury-btn luxury-btn-primary">
            <span className="luxury-btn-text">Start Your Project</span>
            <span className="luxury-btn-hover"></span>
            <FontAwesomeIcon icon={faArrowRight} className="luxury-btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
