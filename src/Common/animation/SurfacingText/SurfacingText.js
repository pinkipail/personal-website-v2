import { gsap, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react';
import { triggerConfig } from '../../consts/scrollAnimation';
import classes from './SurfacingText.module.css';

function SurfacingText({
  children, reverse, sequence = true, backBlur = true,
}) {
  const textsRef = useRef([]);
  const wrapRef = useRef();
  const [texts, setTexts] = useState([]);

  const config = {
    reverse,
    sequence,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    initText();
  }, [children]);

  useEffect(() => {
    animationText();
  }, [texts]);

  function initText() {
    let textsArray;
    if (isArray(children)) {
      textsArray = children.filter((text) => isString(text));
    }

    if (isString(children)) {
      textsArray = [children];
    }
    setTexts(textsArray);
  }

  function animationText() {
    textsRef.current.forEach((text, i) => {
      surfacingText(text, wrapRef.current, config, i);
    });
  }

  return (
    <div ref={wrapRef}>
      {texts.map((text, i) => (
        <div
          className={backBlur ? classes.wrapBlurred : classes.wrap}
          key={text}
        >
          <div ref={(ref) => { textsRef.current[i] = ref; }}>
            {text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SurfacingText;

// utils

function isString(value) {
  return typeof value === 'string';
}

function isArray(value) {
  return Array.isArray(value);
}

// animations

function surfacingText(element, trigger, config, index) {
  gsap.fromTo(element, {
    y: config.reverse ? '-100%' : '100%',
  }, {
    scrollTrigger: {
      trigger,
      ...triggerConfig,
      start: '0% 125%',
      end: '-0% 90%',
    },
    y: 0,
    duration: 0.7,
    delay: config.sequence ? 0.1 * index : 0,
    ease: 'power2.inOut',
  });
}
