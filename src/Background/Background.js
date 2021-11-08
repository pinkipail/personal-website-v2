import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Pattern from './Pattern/Pattern';
import { NEED_INVERT } from '../Common/hooks/useDarkTheme';

const GL_CONFIG = {
  powerPreference: 'high-performance',
  alpha: false,
  antialias: false,
  stencil: false,
  depth: false,
};

function Background({ children }) {
  return (
    <>
      <Canvas
        style={{ position: 'fixed', zIndex: 0 }}
        gl={GL_CONFIG}
        camera={{ position: [0, 0, 1] }}
        className={`${NEED_INVERT}`}
      >
        <Suspense fallback={null}>
          <Pattern />
        </Suspense>
      </Canvas>
      {children}
    </>
  );
}

export default Background;
