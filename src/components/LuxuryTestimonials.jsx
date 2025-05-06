import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../styles/Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Sophia Laurent",
    title: "CEO, Éclat Luxury Group",
    avatar: "https://i.pinimg.com/736x/cb/8e/ba/cb8eba71d22908bf61144c76e8dff908.jpg",
    content: "Working with this team transformed our digital presence. Their attention to detail and sophisticated design approach perfectly captured our brand's essence. The results exceeded our expectations and significantly increased our online engagement.",
    rating: 5
  },
  {
    id: 2,
    name: "James Vanderbilt",
    title: "Director, Regal Holdings",
    avatar: "https://i.pinimg.com/736x/e7/61/7f/e7617fbcf801f05e72d89999714df9e1.jpg",
    content: "The premium experience from start to finish was remarkable. They understood our vision for a distinguished digital platform and executed it flawlessly. Our clientele has noticed and appreciated the elevated user experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Isabella Montclair",
    title: "Marketing Director, Noble Estates",
    avatar: "https://i.pinimg.com/736x/b8/e3/a5/b8e3a5a5429448e486ec24beb37acb08.jpg",
    content: "Exceptional craftsmanship in every aspect. The team delivered a website that perfectly represents our high-end properties while providing an intuitive browsing experience. Their work has become a talking point among our clients.",
    rating: 5
  },
  {
    id: 4,
    name: "Alexander Winthrop",
    title: "Founder, Prestige Motors",
    avatar: "https://i.pinimg.com/736x/30/a0/0e/30a00ec2156da425deec639411954291.jpg",
    content: "Their ability to translate luxury into digital form is unparalleled. The animations and interactions they implemented for our vehicle configurator have significantly enhanced customer engagement and conversion rates.",
    rating: 5
  }
];

const LuxuryTestimonials = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        // opacity: 0,
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
        // opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "back.out(1.7)"
      });

      gsap.from(".luxury-testimonial-card", {
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        // opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out"
      });
    }, sectionRef);

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="luxury-testimonials" ref={sectionRef} id="testimonials">
      <div className="testimonials-container">
        <div className="luxury-testimonials-ornament luxury-testimonials-ornament-1" />
        <div className="luxury-testimonials-ornament luxury-testimonials-ornament-2" />

        <div className="luxury-testimonials-header">
          <h2 className="luxury-testimonials-title" ref={titleRef}>
            <span className="luxury-highlight">Acclaimed</span> Excellence
          </h2>
          <p className="luxury-testimonials-subtitle">
            Trusted by luxury brands and discerning clients worldwide
          </p>
        </div>

        <div className="luxury-testimonials-slider" ref={sliderRef}>
          <div className="luxury-testimonial-featured">
            <div className="luxury-testimonial-card luxury-testimonial-card-featured">

              {/* Checkmark Icon (open) */}
              <svg 
                className="luxury-testimonial-quote luxury-testimonial-quote-open" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <p className="luxury-testimonial-content">
                {testimonials[activeIndex].content}
              </p>

              {/* Checkmark Icon (close) */}
              <svg 
                className="luxury-testimonial-quote luxury-testimonial-quote-close" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <div className="luxury-testimonial-author">
                <div className="luxury-testimonial-avatar">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={`Avatar of ${testimonials[activeIndex].name}`} 
                    loading="lazy"
                  />
                </div>
                <div className="luxury-testimonial-author-info">
                  <h4 className="luxury-testimonial-name">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="luxury-testimonial-title">
                    {testimonials[activeIndex].title}
                  </p>
                </div>
              </div>

              <div className="luxury-testimonial-rating">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--primary-accent)" aria-hidden="true">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="luxury-testimonial-thumbnails">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.id}
                className={`luxury-testimonial-thumbnail ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial from ${testimonial.name}`}
              >
                <div className="luxury-testimonial-thumbnail-avatar">
                  <img 
                    src={testimonial.avatar} 
                    alt={`Thumbnail of ${testimonial.name}`} 
                    loading="lazy"
                  />
                </div>
                <div className="luxury-testimonial-thumbnail-info">
                  <h5 className="luxury-testimonial-thumbnail-name">
                    {testimonial.name}
                  </h5>
                  <p className="luxury-testimonial-thumbnail-title">
                    {testimonial.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="luxury-testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`luxury-testimonials-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryTestimonials;
