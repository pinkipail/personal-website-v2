import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap/gsap-core';
import { useLockBodyScroll } from 'react-use';
import LoadingLine from '../LoadingLine/LoadingLine';

import classes from './LoaderPage.module.css';

// TODO: refactoring year
const year = new Date().getFullYear();

function LoaderPage({ animation }) {
  const containerRef = useRef();
  const textRef = useRef();
  const [isLocked, setIsLocked] = useState(true);
  useLockBodyScroll(isLocked);

  useEffect(() => {
    if (animation === 'exiting') {
      animatingExit();
    }
  }, [animation]);

  function animatingExit() {
    animatingOpacity(containerRef.current);
    animatingOpacity(textRef.current);
    setTimeout(() => {
      setIsLocked(false);
    }, 900);
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
