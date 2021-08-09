/* eslint-disable react/jsx-props-no-spreading */
import React, {
  Suspense, useEffect, useRef, useState,
} from 'react';
import { Canvas } from '@react-three/fiber';
import {
  useTexture,
  useCubeTexture,
  MeshDistortMaterial,
  Html,
} from '@react-three/drei';
import {
  Bloom,
  DepthOfField,
  Noise,
  Vignette,
  EffectComposer,
  ToneMapping,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

import './Background.css';
import { TweenLite } from 'gsap/gsap-core';

import MainSphere from './MainSphere/MainSphere';
import SmallSpheres from './SmallSpheres/SmallSpheres';

const themesMap = new Map([
  ['default', { b: 0.02, g: 0.02, r: 0.02 }],
  ['dark', { b: 0.02, g: 0.02, r: 0.02 }],
  ['light', { b: 0.5, g: 0.5, r: 0.5 }],
]);

function Scene() {
  const bumpMap = useTexture('/bump.jpg');
  const envMap = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    { path: '/cube/' },
  );

  const materialRef = useRef();
  const [material, setMaterial] = useState();
  useEffect(() => {
    setMaterial(materialRef.current);
  }, [materialRef]);

  return (
    <>
      <MeshDistortMaterial
        ref={materialRef}
        color="#010101"
        roughness={0.1}
        metalness={1}
        bumpScale={0.005}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={1}
        distort={0.4}
        envMap={envMap}
        bumpMap={bumpMap}
      />
      {material
       && (
       <>
         <MainSphere material={material} />
         <SmallSpheres material={material} />
       </>
       )}
    </>
  );
}

export default function Background({ children, darkTheme }) {
  const background = useRef();

  useEffect(() => {
    toggleTheme();
  }, [darkTheme]);

  function toggleTheme() {
    const color = darkTheme ? themesMap.get('dark') : themesMap.get('light');
    TweenLite.to(background.current, 1, { ...color, ease: 'power1.inOut' });
  }

  return (
    <>
      <Canvas
        style={{ position: 'fixed', zIndex: 0 }}
        camera={{ position: [0, 0, 3] }}
        gl={{
          powerPreference: 'high-performance',
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
      >
        <color ref={background} attach="background" args={['#050505']} />
        <fog color="#161616" attach="fog" near={8} far={30} />
        <Suspense fallback={<Html center>Loading.</Html>}>
          <Scene />
          <EffectComposer>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={480}
            />
            <Bloom luminanceSmoothing={0.1} luminanceThreshold={0.2} />
            <Noise
              premultiply // enables or disables noise premultiplication
              blendFunction={BlendFunction.ADD} // blend mode
              opacity={0.6}
            />
            <Vignette darkness={0.4} />
            <ToneMapping
              blendFunction={BlendFunction.NORMAL} // blend mode
              adaptive={true} // toggle adaptive luminance map usage
              resolution={256} // texture resolution of the luminance map
              middleGrey={0.6} // middle grey factor
              maxLuminance={5.0} // maximum luminance
              averageLuminance={1.0} // average luminance
              adaptationRate={1.0} // luminance adaptation rate
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
      {children}
    </>
  );
}
