import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/gsap-core';
import LoadingLine from '../LoadingLine/LoadingLine';

import classes from './LoaderPage.module.css';

const year = new Date().getFullYear();

function LoaderPage({ animation }) {
  const containerRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    if (animation === 'exiting') {
      animatingExit();
    }
  }, [animation]);

  function animatingExit() {
    animatingOpacity(containerRef.current);
    animatingOpacity(textRef.current);
  }

  return (
    <div
      ref={containerRef}
      className={classes.loader}
    >
      <div
        ref={textRef}
        className={classes.loaderContent}
      >
        VASILIIY FEDOROV
        <br />
        ©Copyright — {year}
      </div>
      <div className={classes.lineWrap}>
        <LoadingLine animation={animation} />
      </div>
    </div>
  );
}

export default LoaderPage;

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
