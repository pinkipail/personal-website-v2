import * as THREE from 'three';
import React, {
  useRef, useLayoutEffect,
} from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
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
        iScrollPos: { value: 0 },
        iTexture: { type: 't', value: null },
      },
      fragmentShader: fragment,
    });
  }
}

extend({ PatternMaterial });

function Pattern() {
  const meshRef = useRef();
  const textureMap = useTexture(TEXTURE_URL);
  const scrollProgress = useScrollProgress();

  useLayoutEffect(() => {
    textureMap.wrapS = THREE.RepeatWrapping;
    textureMap.wrapT = THREE.RepeatWrapping;
    meshRef.current.material.uniforms.iTexture.value = textureMap;
  }, []);

  useFrame((state) => {
    meshRef.current.material.uniforms.iTime.value = state.clock.elapsedTime;

    meshRef.current.material.uniforms.iScrollPos.value = THREE.MathUtils.lerp(
      meshRef.current.material.uniforms.iScrollPos.value,
      -scrollProgress,
      0.3,
    );
  });

  return (
    <mesh ref={meshRef} scale={7}>
      <planeBufferGeometry />
      <patternMaterial />
    </mesh>
  );
}

export default Pattern;
