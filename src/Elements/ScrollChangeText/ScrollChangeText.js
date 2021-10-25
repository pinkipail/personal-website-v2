/* eslint-disable no-unused-expressions */
import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef, useState } from 'react';
import classes from './ScrollChangeText.module.css';

function ScrollChangeText() {
  const text1Ref = useRef({});
  const text2Ref = useRef();
  const countRef = useRef(0);
  const [secondTitle, setSecondTitle] = useState(secondTitles[0]);

  const tlRef = useRef(gsap.timeline({
    paused: true,
    repeat: -1,
    repeatDelay: 10,
    onRepeat: () => {
      setSecondTitle(getTitle);
    },
  }));

  useEffect(() => {
    surfacingText(text1Ref.current, text2Ref.current);
    const setTimeoutId = setTimeout(() => {
      animationLines(text1Ref.current, text2Ref.current, tlRef.current);
      tlRef.current.play();
    }, 10000);

    return () => {
      clearTimeout(setTimeoutId);
    };
  }, []);

  function getTitle() {
    countRef.current = countRef.current < secondTitles.length - 1
      ? countRef.current + 1
      : 0;
    const count = countRef.current;
    return secondTitles[count];
  }

  return (
    <div className={classes.container}>
      <span
        className={classes.text}
        ref={text1Ref}
      >
        FRONTEND-
      </span>
      <span
        className={`${classes.text} ${classes[secondTitle.className]}`}
        ref={text2Ref}
      >
        {secondTitle.value}
      </span>
      <span className={classes.textHidden}>
        FRONTEND-
      </span>
    </div>
  );
}

// const

const secondTitles = [
  { value: 'FRAMEWORK-', className: 'FRAMEWORK' },
  { value: 'ANGULAR-', className: 'ANGULAR' },
  { value: 'REACT-', className: 'REACT' },
  { value: 'WEB-', className: 'WEB' },
  { value: 'HTML-CSS-JS-', className: 'HTML' },
  { value: 'JAVASCRIPT-', className: 'JAVASCRIPT' },
  { value: 'CONSOLE.LOG-', className: 'CONSOLE' },
  { value: 'STACKOVERFLOW-', className: 'STACKOVERFLOW' },
];

// animations

function animationLines(line1, line2, tl) {
  const config = {
    duration: 1.5,
    ease: 'power2.inOut',
  };

  tl.fromTo(line1, {
    y: '0%',
  }, {
    y: '-200%',
    ...config,
  }, 0);

  tl.fromTo(line2, {
    y: '200%',
  }, {
    y: '0%',
    ...config,
  }, 0);

  tl.fromTo(line1, {
    y: '-200%',
  }, {
    y: '0%',
    ...config,
    delay: 3,
  }, 1);

  tl.fromTo(line2, {
    y: '0%',
  }, {
    y: '200%',
    delay: 3,
    ...config,
  }, 1);
}

function surfacingText(line1, line2) {
  gsap.from(line1, {
    y: '100%',
    duration: 0.5,
    delay: 1,
    ease: 'power1.out',
  });

  gsap.to(line2, {
    y: '100%',
    duration: 0,
  });
}

export default ScrollChangeText;
