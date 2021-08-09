import { Icosahedron } from '@react-three/drei';
import React, { useState } from 'react';
import { useFrame } from 'react-three-fiber';

export default function SmallSpheres({ material }) {
  // we use this array ref to store the spheres after creating them
  const [sphereRefs] = useState(() => []);
  // we use this array to initialize the background spheres
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
  // smaller spheres movement
  useFrame(() => {
    // animate each sphere in the array
    sphereRefs.map((sphere) => {
      const el = sphere;
      el.position.y += 0.05;
      if (el.position.y > 20) el.position.y = -20;
      el.rotation.x += 0.06;
      el.rotation.y += 0.06;
      el.rotation.z += 0.02;
      return el;
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
    </>
  );
}
