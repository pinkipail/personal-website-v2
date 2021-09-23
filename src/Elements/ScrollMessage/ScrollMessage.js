import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import classes from './ScrollMessage.module.css';

function ScrollMessage() {
  const text1Ref = useRef({});
  const text2Ref = useRef();
  const scroll = 'scroll';

  useEffect(() => {
    animationLines(text1Ref.current, text2Ref.current);
  }, []);

  return (
    <div className={classes.container}>
      <span
        className={classes.text}
        ref={text1Ref}
      >
        {scroll}
      </span>
      <span
        className={classes.text}
        ref={text2Ref}
      >
        {scroll}
      </span>
      <span className={classes.textHidden}>
        {scroll}
      </span>
    </div>
  );
}

export default ScrollMessage;

// utils

function animationLines(line1, line2) {
  const config = {
    repeat: -1,
    duration: 1.5,
    repeatDelay: 1,
    ease: 'power2.inOut',
  };
  gsap.fromTo(
    line1,
    {
      y: '-200%',
    },
    {
      y: '0%',
      ...config,
    },
  );

  gsap.fromTo(
    line2,
    {
      y: '0%',
    },
    {
      y: '200%',
      ...config,
    },
  );
}
