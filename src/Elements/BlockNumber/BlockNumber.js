import { gsap, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';
import { triggerConfig } from '../../Common/consts/scrollAnimation';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import classes from './BlockNumber.module.css';

export default function BlockNumber({ value, deltaStart = '5rem', deltaEnd = '-5rem' }) {
  const numberRef = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    numberRef.current.forEach((number) => {
      animateNumber(number);
    });
  }, []);
  return (
    <ParallaxScrolling
      deltaStart={deltaStart}
      deltaEnd={deltaEnd}
    >
      <div className={classes.container}>
        <div className={classes.wrap}>
          <div
            ref={(ref) => { numberRef.current[0] = ref; }}
            className={classes.value}
          >
            0
          </div>
        </div>
        <div className={classes.wrap}>
          <div
            ref={(ref) => { numberRef.current[1] = ref; }}
            className={classes.value}
          >
            {value}
          </div>
        </div>
      </div>
    </ParallaxScrolling>
  );
}

// animations

function animateNumber(circle) {
  gsap.from(circle, {
    x: '-100%',
    scrollTrigger: {
      trigger: circle,
      ...triggerConfig,
      start: '0% 125%',
      end: '0% 90%',
    },
    duration: 1,
    ease: 'power2.inOut',
  });
}
