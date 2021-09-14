import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/gsap-core';
import classes from './MainBlock.module.css';

export default function MainBlock() {
  const firstTitleRef = useRef();
  const secondTitleRef = useRef();
  const subtitleRef = useRef();

  useEffect(() => {
    surfacingText(firstTitleRef.current, 0);
    surfacingText(secondTitleRef.current, 0);
    surfacingText(subtitleRef.current, 0.5, '-100%');
  }, []);

  return (
    <div className={classes.block}>
      <div className={classes.blockContent}>
        <div className={classes.textWrapper}>
          <div className={classes.titleWrap}>
            <div
              ref={firstTitleRef}
              className={classes.titleOutline}
            >
              FRONTEND-
            </div>
          </div>
          <div className={classes.titleWrap}>
            <div
              ref={secondTitleRef}
              className={classes.title}
            >
              DEVELOPER
            </div>
          </div>
          <div className={classes.titleWrap}>
            <div
              ref={subtitleRef}
              className={classes.subtitle}
            >
              ФЕДОРОВ ВАСИЛИЙ
            </div>
          </div>
        </div>
        <div className={classes.scrollText}>
          scroll
        </div>
      </div>
    </div>
  );
}

function surfacingText(element, delay, delta = '100%') {
  gsap.from(
    element,
    {
      y: delta,
      duration: 0.5,
      delay: 1 + delay,
      ease: 'power1.out',
    },
  );
}
