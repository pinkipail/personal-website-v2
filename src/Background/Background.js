import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Pattern from './Pattern/Pattern';
import classes from './Background.module.css';

const GL_CONFIG = {
  powerPreference: 'high-performance',
  alpha: false,
  antialias: false,
  stencil: false,
  depth: false,
};

function Background({ children }) {
  return (
    <div className={classes.canvasWrap}>
      <Canvas
        style={{ position: 'fixed', zIndex: 0 }}
        gl={GL_CONFIG}
        camera={{ position: [0, 0, 1] }}
      >
        <Suspense fallback={null}>
          <Pattern />
        </Suspense>
      </Canvas>
      {children}
    </div>
  );
}

export default Background;
