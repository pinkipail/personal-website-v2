import * as THREE from 'three';
import React, {
  useRef, useLayoutEffect,
} from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import gsap from 'gsap/gsap-core';
import fragment from './shaders/fragment';
import useScrollProgress from '../../Common/hooks/useScrollProgress';

const TEXTURE_URL = '/img/texture.jpg';

class PatternMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        iTime: { type: 'f', value: 0 },
        iResolution: {
          type: 'f',
          value: 1.5,
        },
        iScrollPos: { type: 'f', value: 0 },
        iTexture: { type: 't', value: null },
        iColorTheme: { type: 'f', value: 1 },
      },
      fragmentShader: fragment,
    });
  }
}

extend({ PatternMaterial });

function Pattern({ darkTheme }) {
  const meshRef = useRef();
  const textureMap = useTexture(TEXTURE_URL);
  const scrollProgress = useScrollProgress();

  useLayoutEffect(() => {
    textureMap.wrapS = THREE.RepeatWrapping;
    textureMap.wrapT = THREE.RepeatWrapping;
    meshRef.current.material.uniforms.iTexture.value = textureMap;
  }, []);

  useFrame(({ clock }) => {
    animatingPattern(clock);
    animatingScroll();
    animatingThemeToggle();
  });

  function animatingPattern(clock) {
    meshRef.current.material.uniforms.iTime.value = clock.elapsedTime;
  }

  function animatingScroll() {
    meshRef.current.material.uniforms.iScrollPos.value = THREE.MathUtils.damp(
      meshRef.current.material.uniforms.iScrollPos.value,
      -scrollProgress,
      0.2,
      0.7,
    );
  }

  function animatingThemeToggle() {
    const color = darkTheme ? 1 : 0;
    meshRef.current.material.uniforms.iColorTheme.value = THREE.MathUtils.damp(
      meshRef.current.material.uniforms.iColorTheme.value,
      color,
      0.1,
      0.7,
    );
  }

  return (
    <mesh ref={meshRef} scale={7}>
      <planeBufferGeometry />
      <patternMaterial />
    </mesh>
  );
}

export default Pattern;
