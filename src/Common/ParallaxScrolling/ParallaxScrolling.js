import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import classes from './ParallaxScrolling.module.css';

export default function ParallaxScrolling(props) {
  const {
    children,
    deltaStart = 70,
    deltaEnd = -70,
  } = props;

  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    animateSmoothScrolling(containerRef.current, deltaStart, deltaEnd);
  }, []);

  return (
    <span
      ref={containerRef}
      className={classes.container}
    >
      {children}
    </span>
  );
}

// utils

function animateSmoothScrolling(container, deltaStart, deltaEnd) {
  gsap.fromTo(
    container,
    {
      y: deltaStart,
    },
    {
      y: deltaEnd,
      scrollTrigger: {
        trigger: container,
        scrub: 0.5,
      },
    },
  );
}
