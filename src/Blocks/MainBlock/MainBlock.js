import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/gsap-core';
import classes from './MainBlock.module.css';

export default function MainBlock() {
  const firstTitleRef = useRef();
  const secondTitleRef = useRef();
  const subtitleRef = useRef();

  const descriptionRef = useRef();
  useEffect(() => {
    surfacingText(firstTitleRef.current, 0);
    surfacingText(secondTitleRef.current, 0);
    surfacingText(subtitleRef.current, 0.5, '-100%');
    surfacingDescriptionText(descriptionRef.current);
  }, []);

  function surfacingDescriptionText(lines) {
    lines.childNodes.forEach((line) => {
      surfacingText(line.firstChild, 1);
    });
  }

  return (
    <div className={classes.block}>
      <div className={classes.blockContent}>
        <div className={classes.titleWrap}>
          <div className={classes.textWrapper}>
            <div
              ref={firstTitleRef}
              className={classes.titleOutline}
            >
              FRONTEND-
            </div>
          </div>
          <div className={classes.textWrapper}>
            <div
              ref={secondTitleRef}
              className={classes.title}
            >
              DEVELOPER
            </div>
          </div>
          <div className={classes.textWrapper}>
            <div
              ref={subtitleRef}
              className={classes.subtitle}
            >
              ФЕДОРОВ ВАСИЛИЙ
            </div>
          </div>
        </div>
        <div
          ref={descriptionRef}
          className={classes.description}
        >
          <div className={classes.textWrapper}>
            <div className={classes.descriptionText}>Мне нравится создавать</div>
          </div>
          <div className={classes.textWrapper}>
            <div className={classes.descriptionText}>интерактивные приложения</div>
          </div>
          <div className={classes.textWrapper}>
            <div className={classes.descriptionText}>на JavaScript с акцентом на</div>
          </div>
          <div className={classes.textWrapper}>
            <div className={classes.descriptionText}>анимированный контент,</div>
          </div>
          <div className={classes.textWrapper}>
            <div className={classes.descriptionText}>интерактивные приложения</div>
          </div>
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
