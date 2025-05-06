// PageTransition.js
import React, { useEffect } from 'react';
import anime from 'animejs';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    const animateOut = () => {
      return anime.timeline({
        easing: 'easeInOutExpo',
        duration: 800
      })
      .add({
        targets: '.transition-overlay',
        height: ['0%', '100%'],
        bottom: 0,
        opacity: 1
      })
      .add({
        targets: '.transition-overlay',
        height: ['100%', '0%'],
        top: 0,
        bottom: 'auto',
        opacity: 1
      }, '-=400');
    };
    
    animateOut();
  }, [location]);
  
  return (
    <>
      <div className="transition-container">
        {children}
      </div>
      <div className="transition-overlay" style={{
        position: 'fixed',
        left: 0,
        width: '100%',
        backgroundColor: '#D4AF37',
        zIndex: 9999,
        opacity: 0
      }}></div>
    </>
  );
};

export default PageTransition;