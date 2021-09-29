import { gsap } from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react';
import './GooeyTextEffect.css';

function GooeyTextEffect() {
  const tl = useRef(createTimeline());
  const itemRef = useRef();
  const textsRef = useRef({});
  const stdDeviationRef = useRef({ value: 0 });
  const [stdDeviation, setStdDeviation] = useState(0);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    createTimeline();
    addAnimations();
  }, []);

  function createTimeline() {
    return gsap.timeline({
      paused: true,
      onComplete: () => {
        setFilter(null);
      },
      onReverseComplete: () => {
        setFilter(null);
      },
      onUpdate: () => {
        setStdDeviation(stdDeviationRef.current.value);
      },
    });
  }

  function addAnimations() {
    addAnimationFilter(tl.current, stdDeviationRef.current, duration);
    addAnimationText(tl.current, textsRef.current, duration);
  }

  function onMouseEnterFn() {
    setFilter(`url(#${filterId})`);
    tl.current.play();
  }

  function onMouseLeaveFn() {
    setFilter(`url(#${filterId})`);
    tl.current.reverse();
  }

  return (
    <div
      className="menu__item"
      ref={itemRef}
      onMouseEnter={onMouseEnterFn}
      onMouseLeave={onMouseLeaveFn}
    >
      <svg className="menu__text" viewBox="0 0 100 20" preserveAspectRatio="xMinYMid meet">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur
              stdDeviation={stdDeviation}
              in="SourceGraphic"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values={colorMatrix}
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <g filter={filter}>
          <text
            x="0"
            y="15"
            ref={(ref) => { textsRef.current.first = ref; }}
          >FRONTEND-
          </text>
          <text
            x="0"
            y="15"
            ref={(ref) => { textsRef.current.second = ref; }}
          >ANGULAR-
          </text>
        </g>
      </svg>
    </div>
  );
}

// constants

const filterId = 'gooey';
const duration = 0.8;
const colorMatrix = `1 0 0 0 0
                     0 1 0 0 0
                     1 0 1 0 0
                     0 0 0 18 -8`;

// animations

function addAnimationText(tl, texts, durationTime) {
  tl
    .to(texts.first, {
      duration: durationTime,
      ease: 'none', // Power1.easeInOut
      opacity: 0,
    }, 0)
    .to(texts.second, {
      duration: durationTime,
      ease: 'none', // Power1.easeInOut
      opacity: 1,
    }, 0)
    .to(texts.first, {
      duration: durationTime,
      ease: 'Power1.easeInOut',
      y: -5,
    }, 0)
    .to(texts.second, {
      duration: durationTime,
      ease: 'Power1.easeInOut',
      startAt: { y: 5 },
      y: 0,
    }, 0);
}

function addAnimationFilter(tl, stdDeviation, durationTime) {
  tl
    .to(stdDeviation, {
      duration: durationTime / 2,
      ease: 'none',
      startAt: { value: 0 },
      value: 1,
    }, 0)
    .to(stdDeviation, {
      duration: durationTime / 2,
      ease: 'none',
      value: 0,
    });
}

export default GooeyTextEffect;
