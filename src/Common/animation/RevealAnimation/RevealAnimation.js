import { gsap, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';
import { trigerConfig } from '../../consts/scrollAnimation';
import classes from './RevealAnimation.module.css';

function RevealAnimation({ children }) {
  const linesRef = useRef();
  const descriptionsRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    surfacingText(descriptionsRef.current);
    surfacingLine(linesRef.current);
  }, []);
  return (
    <div className={classes.project}>
      <div
        className={classes.textWrap}
        ref={descriptionsRef}
      >
        {children}
      </div>
      <div
        className={classes.line}
        ref={linesRef}
      />
    </div>
  );
}

const duration = 0.7;

// utils

function surfacingText(element) {
  gsap.from(
    element,
    {
      scrollTrigger: {
        trigger: element,
        ...trigerConfig,
        start: '0% 125%',
        end: '0% 90%',
      },
      autoAlpha: 0,
      duration: 0,
      delay: duration,
      marker: true,
    },
  );
}

// animations

function surfacingLine(element) {
  gsap.fromTo(element, {
    right: '100%',
  }, {
    scrollTrigger: {
      trigger: element,
      ...trigerConfig,
      start: '0% 125%',
      end: '0% 90%',
    },
    right: '0%',
    duration,
    ease: 'power1.inOut',
  });

  gsap.fromTo(element, {
    left: '0%',
  }, {
    scrollTrigger: {
      trigger: element,
      ...trigerConfig,
      start: '0% 125%',
      end: '0% 90%',
    },
    left: '100%',
    duration,
    delay: duration,
    ease: 'power1.inOut',
  });
}

export default RevealAnimation;
