import React, { useEffect, useRef } from 'react';
import gsap, { ScrollTrigger } from 'gsap/all';

function TextCircle() {
  const circleRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    animateCircle(circleRef.current);
  }, []);

  return (
    <img
      ref={circleRef}
      src="img/circle.svg"
      alt="skill"
      style={{ height: '20rem', width: '20rem' }}
    />
  );
}

export default TextCircle;

// animations

function animateCircle(circle) {
  gsap.to(circle, {
    rotation: 150,
    scrollTrigger: {
      trigger: circle,
      scrub: 0.75,
    },
    ease: 'none',
  });
}
