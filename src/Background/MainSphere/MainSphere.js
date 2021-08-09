import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import { Icosahedron } from '@react-three/drei';

const mousePos = new THREE.Vector2(0, 0);

function trackMousePos() {
  window.addEventListener('mousemove', (e) => {
    setMousePos(e);
  });
  window.addEventListener('mouseout', () => {
    clearMousePos();
  });
  window.addEventListener('mouseleave', () => {
    clearMousePos();
  });
  window.addEventListener(
    'touchstart',
    (e) => {
      setMousePos(e.touches[0]);
    },
    { passive: false },
  );
  window.addEventListener('touchmove', (e) => {
    setMousePos(e.touches[0]);
  });
  window.addEventListener('touchend', () => {
    clearMousePos();
  });
}

function getNormalizedMousePos(event) {
  return {
    x: (event.clientX / window.innerWidth) * 2 - 1,
    y: -(event.clientY / window.innerHeight) * 2 + 1,
  };
}

function setMousePos(e) {
  const { x, y } = getNormalizedMousePos(e);
  mousePos.x = x;
  mousePos.y = y;
}

function clearMousePos() {
  // mousePos.x = -100000;
  // mousePos.y = -100000;
}

export default function MainSphere({ material }) {
  const main = useRef();
  // main sphere rotates following the mouse position
  useFrame(({ clock }) => {
    main.current.rotation.z = clock.getElapsedTime();
    main.current.rotation.y = THREE.MathUtils.lerp(
      main.current.rotation.y,
      mousePos.x * Math.PI * 0.1,
      0.1,
    );
    main.current.rotation.x = THREE.MathUtils.lerp(
      main.current.rotation.x,
      mousePos.y * Math.PI * 0.1,
      0.1,
    );
  });

  useEffect(() => {
    trackMousePos();
  }, []);
  return (
    <Icosahedron
      args={[1, 4]}
      ref={main}
      material={material}
      position={[0, 0, 0]}
    />
  );
}
