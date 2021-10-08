import * as THREE from 'three';
import React, {
  useRef, useLayoutEffect, useEffect,
} from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import fragment from './shaders/fragment';
import useScrollProgress from '../../Common/hooks/useScrollProgress';

const TEXTURE_URL = 'img/texture.jpg';

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

  useEffect(() => {
    animatingThemeToggle();
  }, [darkTheme]);

  useLayoutEffect(() => {
    textureMap.wrapS = THREE.RepeatWrapping;
    textureMap.wrapT = THREE.RepeatWrapping;
    meshRef.current.material.uniforms.iTexture.value = textureMap;
  }, []);

  // TODO: add mouse animation
  // https://tympanus.net/Development/FlowmapDeformation/index.html
  useFrame(({ clock }) => {
    animatingPattern(clock);
    animatingScroll();
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
    meshRef.current.material.uniforms.iColorTheme.value = color;
  }

  return (
    <mesh ref={meshRef} scale={7}>
      <planeBufferGeometry />
      <patternMaterial />
    </mesh>
  );
}

export default Pattern;
