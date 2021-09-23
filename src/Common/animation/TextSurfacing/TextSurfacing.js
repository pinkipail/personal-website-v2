import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import classes from './TextSurfacing.module.css';

function TextSurfacing({ children, ...config }) {
  const wrapRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    surfacingText(wrapRef.current, config);
  }, []);
  return (
    <span
      className={classes.wrap}
    >
      <span
        className={classes.container}
        ref={wrapRef}
      >
        {children}
      </span>
    </span>
  );
}

export default TextSurfacing;

// utils

function surfacingText(element, config) {
  gsap.fromTo(
    element,
    {
      y: config.reverse ? '-100%' : '100%',

    },
    {
      scrollTrigger: {
        trigger: element,
        toggleActions: 'none play none reset',
        start: '-100% 110%',
        end: '-100% 80%',
      },
      y: 0,
      duration: 0.8,
      ease: 'power3.inOut',
    },
  );
}
