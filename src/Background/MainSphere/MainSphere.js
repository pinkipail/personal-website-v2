import React, { useRef } from 'react';
import { useWindowScroll } from 'react-use';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';

export default function MainSphere({ material }) {
  const { y: scrollY } = useWindowScroll();
  const main = useRef();

  // TODO: Починить mouse
  useFrame(({ clock, mouse }) => {
    const elapsedTime = clock.getElapsedTime();
    main.current.rotation.z = elapsedTime * 0.2;

    main.current.rotation.y = THREE.MathUtils.lerp(
      main.current.rotation.y,
      mouse.y * Math.PI,
      0.1,
    );
    main.current.rotation.x = THREE.MathUtils.lerp(
      main.current.rotation.x,
      mouse.x * Math.PI + scrollY / 100,
      0.01,
    );
  });
  return (
    <Icosahedron
      args={[1, 4]}
      ref={main}
      material={material}
      position={[0, 0, 0]}
    />
  );
}
