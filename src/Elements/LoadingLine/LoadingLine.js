import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import classes from './LoadingLine.module.css';

let progress = 0;
const step = 4;
const result = 100;
let timeoutId;

function LoadingLine({ animation }) {
  const lineRef = useRef();
  useEffect(() => {
    if (animation === 'entered') {
      animatingEnter();
    }
    if (animation === 'exiting') {
      animatingExit();
    }
  }, [animation]);

  function animatingExit() {
    clearTimeout(timeoutId);
    animatingOpacity(lineRef.current);
    animatingEndOfLine(lineRef.current);
  }

  function animatingEnter() {
    animatingMoveOfLine(lineRef.current);
  }

  return (
    <div className={classes.line}>
      <div
        ref={lineRef}
        className={classes.lineInner}
      />
    </div>
  );
}

export default LoadingLine;

// utils

function animatingOpacity(element) {
  gsap.fromTo(
    element,
    { autoAlpha: 1 },
    {
      autoAlpha: 0,
      duration: 0.5,
      delay: 0.5,
      ease: 'power1.in',
    },
  );
}

function animatingEndOfLine(element) {
  gsap.to(
    element,
    {
      width: '100%',
      duration: 0.5,
    },
  );
}

function animatingMoveOfLine(element) {
  timeoutId = setInterval(() => {
    progress += (result - progress) / step;
    gsap.to(
      element,
      {
        width: `${progress}%`,
        duration: 1,
      },
    );
  }, 1000);
}
