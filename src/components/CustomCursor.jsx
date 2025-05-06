// CustomCursor.js
import React, { useEffect } from 'react';
import anime from 'animejs';
import './CustomCursor.scss';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    const moveCircle = (e) => {
      anime({
        targets: cursor,
        left: e.clientX,
        top: e.clientY,
        duration: 100,
        easing: 'linear'
      });
      
      anime({
        targets: follower,
        left: e.clientX,
        top: e.clientY,
        duration: 500,
        easing: 'easeOutExpo'
      });
    };
    
    const hoverAnimation = (e) => {
      if (e.type === 'mouseenter') {
        anime({
          targets: [cursor, follower],
          scale: 2,
          backgroundColor: 'rgba(212, 175, 55, 0.2)',
          duration: 300
        });
      } else {
        anime({
          targets: [cursor, follower],
          scale: 1,
          backgroundColor: 'transparent',
          duration: 300
        });
      }
    };
    
    document.addEventListener('mousemove', moveCircle);
    
    const hoverElements = document.querySelectorAll('a, button, .portfolio-item');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', hoverAnimation);
      el.addEventListener('mouseleave', hoverAnimation);
    });
    
    return () => {
      document.removeEventListener('mousemove', moveCircle);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', hoverAnimation);
        el.removeEventListener('mouseleave', hoverAnimation);
      });
    };
  }, []);
  
  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  );
};

export default CustomCursor;