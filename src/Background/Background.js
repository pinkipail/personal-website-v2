import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import './Background.css';
import Pattern from './Pattern/Pattern';

const GL_CONFIG = {
  powerPreference: 'high-performance',
  alpha: false,
  antialias: false,
  stencil: false,
  depth: false,
};

export default function Background({ children }) {
  return (
    <div className="canvas-wrap">
      <Canvas
        style={{ position: 'fixed', zIndex: 0 }}
        gl={GL_CONFIG}
        camera={{ position: [0, 0, 1] }}
      >
        <Suspense fallback={null}>
          <Pattern />
        </Suspense>
      </Canvas>
      <div className="overlay" />
      {children}
    </div>
  );
}
