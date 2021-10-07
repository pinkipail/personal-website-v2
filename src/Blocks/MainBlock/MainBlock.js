import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
import classes from './MainBlock.module.css';
import ScrollMessage from '../../Elements/ScrollMessage/ScrollMessage';

// TODO: add animation
export default function MainBlock() {
  const firstTitleRef = useRef();
  const secondTitleRef = useRef();
  const subtitleRef = useRef();
  const subtitleWrapRef = useRef();
  const textRef = useRef();
  const scrollMessageRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    surfacingText(firstTitleRef.current, 0);
    surfacingText(secondTitleRef.current, 0);
    surfacingText(subtitleRef.current, 0.5, '-100%');
    hideScroll(scrollMessageRef.current);
    scaleText(textRef.current, textRef.current);
  }, []);

  return (
    <div className={classes.block}>
      <div className={classes.blockContent}>
        <div
          className={classes.textWrapper}
          ref={textRef}
        >
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
          <div
            className={classes.titleWrap}
            ref={subtitleWrapRef}
          >
            <div
              ref={subtitleRef}
              className={classes.subtitle}
            >
              ФЕДОРОВ ВАСИЛИЙ
            </div>
          </div>
        </div>
        <span ref={scrollMessageRef}>
          <ScrollMessage />
        </span>
      </div>
    </div>
  );
}

// animations

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

function scaleText(element, trigger) {
  gsap.fromTo(
    element,
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger,
        toggleActions: 'none restart',
        end: 'bottom top',
        start: 'center center',
        scrub: 0.5,
      },
      scale: 10,
      duration: 0.5,
      ease: 'power1.inOut',
    },
  );
}

function hideScroll(element) {
  gsap.fromTo(
    element,
    {
      autoAlpha: 1,
    },
    {
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        toggleActions: 'play none none reset',
      },
      autoAlpha: 0,
      duration: 0.5,
    },
  );
}
