import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
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
      y: 50,
      // opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      // opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out"
    });

    gsap.from(infoRef.current, {
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      // opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="luxury-contact" ref={sectionRef} id="contact">
      <div className="contact-container">
        <div className="luxury-contact-ornament luxury-contact-ornament-1"></div>
        <div className="luxury-contact-ornament luxury-contact-ornament-2"></div>

        <div className="luxury-contact-header">
          <h2 className="luxury-contact-title" ref={titleRef}>
            <span className="luxury-highlight">Connect</span> With Us
          </h2>
          <p className="luxury-contact-subtitle">
            Begin your journey to exceptional digital experiences
          </p>
        </div>

        <div className="luxury-contact-content">
          <div className="luxury-contact-form-container" ref={formRef}>
            <form className="luxury-contact-form" onSubmit={handleSubmit}>
              {["name", "email", "subject"].map((field) => (
                <div className="luxury-form-group" key={field}>
                  <label htmlFor={field} className="luxury-form-label">
                    {field === "name" ? "Full Name" : field === "email" ? "Email Address" : "Subject"}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="luxury-form-input"
                    required
                  />
                  <div className="luxury-form-underline"></div>
                </div>
              ))}
              <div className="luxury-form-group">
                <label htmlFor="message" className="luxury-form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="luxury-form-textarea"
                  rows="5"
                  required
                ></textarea>
                <div className="luxury-form-underline"></div>
              </div>

              <button type="submit" className="luxury-btn luxury-btn-primary luxury-form-submit">
                <span className="luxury-btn-text">Send Message</span>
                <span className="luxury-btn-hover"></span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>

          <div className="luxury-contact-info" ref={infoRef}>
            <h3 className="luxury-contact-info-title">
              Let's Create Something <span className="luxury-highlight">Extraordinary</span>
            </h3>

            <p className="luxury-contact-info-description">
              Whether you're ready to start your project or just want to explore possibilities, we're here to guide you through every step of the process.
            </p>

            <div className="luxury-contact-info-items">
              <div className="luxury-contact-info-item">
                <div className="luxury-contact-info-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="luxury-contact-info-content">
                  <h4 className="luxury-contact-info-label">Our Studio</h4>
                  <p className="luxury-contact-info-text">
                    123 Premium Avenue, Suite 100<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="luxury-contact-info-item">
                <div className="luxury-contact-info-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="luxury-contact-info-content">
                  <h4 className="luxury-contact-info-label">Phone</h4>
                  <p className="luxury-contact-info-text">
                    <a href="tel:+11234567890" className="luxury-contact-info-link">
                    +254 742-164-615
                    </a>
                  </p>
                </div>
              </div>

              <div className="luxury-contact-info-item">
                <div className="luxury-contact-info-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="luxury-contact-info-content">
                  <h4 className="luxury-contact-info-label">Email</h4>
                  <p className="luxury-contact-info-text">
                    <a href="mailto:contact@luxurydesign.com" className="luxury-contact-info-link">
                    kennethmburu21@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="luxury-contact-hours">
              <h4 className="luxury-contact-hours-title">Working Hours</h4>
              <p className="luxury-contact-hours-text">
                Monday - Friday: 9am - 6pm<br />
                Saturday: By appointment<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
