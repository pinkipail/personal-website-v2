import React, {
  Suspense, useEffect, useRef, useState,
} from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap/gsap-core';
import Pattern from './Pattern/Pattern';

import classes from './Background.module.css';

const GL_CONFIG = {
  powerPreference: 'high-performance',
  alpha: false,
  antialias: false,
  stencil: false,
  depth: false,
};

function Background({ darkTheme, children }) {
  const overlayRef = useRef();
  const [darkThemeState, setDarkThemeState] = useState(darkTheme);

  useEffect(() => {
    animatingThemeToggle(
      overlayRef.current,
      darkTheme,
      () => setDarkThemeState(darkTheme),
    );
  }, [darkTheme]);

  return (
    <div className={classes.canvasWrap}>
      <Canvas
        style={{ position: 'fixed', zIndex: 0 }}
        gl={GL_CONFIG}
        camera={{ position: [0, 0, 1] }}
      >
        <Suspense fallback={null}>
          <Pattern darkTheme={darkThemeState} />
        </Suspense>
      </Canvas>
      <div
        ref={overlayRef}
        className={classes.overlay}
      />
      {children}
    </div>
  );
}

export default Background;

// utils

function animatingThemeToggle(element, darkTheme, callback) {
  const colorHex = darkTheme ? '#000000' : '#808080';

  const tl = gsap.timeline();
  tl.to(
    element,
    {
      autoAlpha: '0',
      duration: 0,
    },
  );
  tl.fromTo(
    element,
    {
      background: colorHex,
      autoAlpha: '0',
    },
    {
      background: colorHex,
      autoAlpha: '100%',
      duration: 0.4,
      ease: 'power2.inOut',
    },
  );
  tl.call(callback);
  tl.fromTo(
    element,
    {
      background: colorHex,
      autoAlpha: '100%',
    },
    {
      background: colorHex,
      autoAlpha: '0%',
      duration: 0.4,
      ease: 'power2.inOut',
    },
  );
}
