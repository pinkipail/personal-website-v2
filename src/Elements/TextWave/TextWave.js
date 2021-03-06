import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import classes from './TextWave.module.css';

function TextWave({ value: text }) {
  const tlRef = useRef(gsap.timeline({ paused: true }));
  const charsRef = useRef(createMatrix());

  useEffect(() => {
    addAnimation();
    playAnimation();
    return clearAnimation;
  }, [text]);

  function addAnimation() {
    colors.forEach((_, i) => {
      text.split('').forEach((char, j) => {
        animateWave(tlRef.current, charsRef.current[i][j], i, j);
      });
    });
  }

  function playAnimation() {
    tlRef.current.play();
  }

  function clearAnimation() {
    tlRef.current.clear();
  }

  return (
    <span className={classes.container}>
      {colors.map((color, i) => (
        <span
          className={classes.word}
          style={{ color }}
          key={i}
        >
          {text.split('').map((char, j) => (
            <span
              className={classes.char}
              ref={(ref) => { charsRef.current[i][j] = ref; }}
              key={j}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
      <span className={classes.textHidden}>
        {text}
      </span>
    </span>
  );
}

// constants

const colors = ['#111111', '#333333', '#666666', '#999999', '#EEEEEE'];

// animations

function animateWave(tl, char, i, j) {
  tl.fromTo(char, {
    x: `${i * -0.7}rem`,
    y: '-55%',
  }, {
    yoyo: true,
    x: `${i * -0.7}rem`,
    y: '55%',
    duration: 0.8,
    delay: (i * -0.03) + (j * 0.2),
    repeat: -1,
    repeatDelay: 0.1,
    ease: 'power1.inOut',
  }, 0);
}

// utils

function createMatrix() {
  const matrix = new Array(colors.length).fill(0).map(() => []);
  return matrix;
}

export default TextWave;
