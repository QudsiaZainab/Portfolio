// useScrollReveal.ts
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export const useScrollReveal = () => {
  useEffect(() => {
    const scrollRevealOptions = {
      distance: '80px',
      duration: 2000,
      delay: 200,
    };

    ScrollReveal(scrollRevealOptions);

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, #skills-container, #experience-container, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    // Clean up animations on unmount if necessary
    return () => ScrollReveal().destroy();
  }, []);
};
