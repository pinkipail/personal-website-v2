import React, { useState } from 'react';
import * as THREE from 'three';
import { useWindowScroll } from 'react-use';
import { Icosahedron } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const initialPositions = [
  [17, 6, -10],
  [-16, -6, -10],
  [12, -15, -10],
  [-25, 15, -20],
  [-17, 3, -20],
  [8, 10, -20],
  [15, -10, -25],
  [-11, -20, -25],
  [30, -30, -25],
];

const spheresPosition = initialPositions.map((item) => item[1]);

export default function SmallSpheres({ material }) {
  const { y: deltaScrollY } = useWindowScroll();

  const [sphereRefs] = useState(() => []);

  useFrame(() => {
    sphereRefs.forEach((sphere, i) => {
      spheresPosition[i] += 0.05;
      sphere.position.y = THREE.MathUtils.lerp(
        sphere.position.y,
        spheresPosition[i] + deltaScrollY / 100 - 20,
        0.2,
      );
      if (sphere.position.y > 20) {
        sphere.position.y = -20;
        spheresPosition[i] = -20 - deltaScrollY / 100;
      }
      sphere.rotation.x += 0.06;
      sphere.rotation.y += 0.06;
      sphere.rotation.z += 0.02;
    });
  });

  return (
    <>
      {initialPositions.map((pos, i) => (
        <Icosahedron
          args={[1, 4]}
          position={[...pos]}
          material={material}
          key={pos.join('')}
          ref={(ref) => { sphereRefs[i] = ref; }}
        />
      ))}
      {deltaScrollY}
    </>
  );
}
