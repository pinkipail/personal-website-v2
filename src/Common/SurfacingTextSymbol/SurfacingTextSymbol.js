import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap, { Timeline } from 'gsap/gsap-core';
import { trigerConfig } from '../consts/scrollAnimation';

function SurfacingTextSymbol({ children }) {
  const tl = useRef(new Timeline({ pause: true }));
  const lettersRef = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      ...trigerConfig,
      onEnter: () => tl.current.pause(0),
      onLeave: () => tl.current.play(),
    });

    lettersRef.current.forEach((letter, i) => {
      animateLetter(letter, scrollTrigger, tl.current, i);
    });
  }, []);

  return (
    <span ref={containerRef}>
      {children.split('').map((letter, i) => (
        <span
          ref={(ref) => { lettersRef.current[i] = ref; }}
          key={i}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export default SurfacingTextSymbol;

// utils

function animateLetter(letter, trigger, timeline, index) {
  timeline.fromTo(
    letter,
    {
      autoAlpha: 0,
      y: '0%',
    },
    {
      y: '-50%',
      autoAlpha: 1,
      scrollTrigger: trigger,
      duration: 0.07,
      delay: index * 0.005,
    },
  );
}
