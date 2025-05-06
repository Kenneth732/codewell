import anime from 'animejs';

export const goldTextReveal = (targets) => {
  return anime({
    targets,
    translateY: [50, 0],
    opacity: [0, 1],
    color: ['#000', '#D4AF37'], // Gold color transition
    duration: 1200,
    easing: 'easeOutExpo',
    delay: anime.stagger(100)
  });
};

export const diamondSparkle = (targets) => {
  return anime({
    targets,
    scale: [0.9, 1.05, 1],
    opacity: [0, 1],
    rotate: [-5, 5, 0],
    duration: 1500,
    easing: 'easeInOutQuad',
    delay: anime.stagger(200)
  });
};

export const smoothScrollReveal = (targets) => {
  return anime({
    targets,
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: anime.stagger(150),
    autoplay: false
  });
};