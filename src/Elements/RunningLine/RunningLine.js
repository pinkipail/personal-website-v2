import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './RunningLine.module.css';

function RunningLine() {
  const lineRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    animateLine(lineRef.current);
  }, []);
  return (
    <div
      className={classes.container}
      ref={lineRef}
    >
      {t("let's meet")}
    </div>
  );
}

// animations

function animateLine(line) {
  gsap.fromTo(line, {
    x: '100%',
  }, {
    x: '-20%',
    ease: 'power1.out',
    scrollTrigger: {
      trigger: line,
      scrub: 1,
      start: 'top 85%',
    },
  });
}

export default RunningLine;
