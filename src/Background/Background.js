import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useTexture,
  useCubeTexture,
  MeshDistortMaterial,
  Icosahedron,
  Html,
} from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  Noise,
  Vignette,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import "./Background.css";
import SmoothScroll from "../Common/SmoothScroll/SmoothScroll";
import Logo from "../Elements/Logo/Logo";
import ProgressBar from "../Elements/ProgressBar/ProgressBar";
import MainBlock from "../Blocks/MainBlock";
import ThemeButton from "../Elements/ThemeButton/ThemeButton";

function MainSphere({ material }) {
  const main = useRef();
  // main sphere rotates following the mouse position
  useFrame(({ clock, mouse }) => {
    main.current.rotation.z = clock.getElapsedTime();
    main.current.rotation.y = THREE.MathUtils.lerp(
      main.current.rotation.y,
      mouse.x * Math.PI,
      0.1
    );
    main.current.rotation.x = THREE.MathUtils.lerp(
      main.current.rotation.x,
      mouse.y * Math.PI,
      0.1
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

function Instances({ material }) {
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
    // const pageYOffset = window.pageYOffset / 100;
    // console.log('pageYOffset :>> ', pageYOffset);
    sphereRefs.forEach((el) => {
      el.position.y += 0.05;
      if (el.position.y > 20) el.position.y = -20;
      el.rotation.x += 0.06;
      el.rotation.y += 0.06;
      el.rotation.z += 0.02;
    });
  });
  return (
    <>
      <MainSphere material={material} />
      {initialPositions.map((pos, i) => (
        <Icosahedron
          args={[1, 4]}
          position={[pos[0], pos[1], pos[2]]}
          material={material}
          key={i}
          ref={(ref) => (sphereRefs[i] = ref)}
        />
      ))}
    </>
  );
}

function Scene() {
  const bumpMap = useTexture("/bump.jpg");
  const envMap = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "/cube/" }
  );
  // We use `useResource` to be able to delay rendering the spheres until the material is ready
  // const [materialRef, material] = useResource()

  const materialRef = useRef();
  const [material, setMaterial] = useState();
  useEffect(() => {
    setMaterial(materialRef.current);
  }, [materialRef]);
  return (
    <>
      <MeshDistortMaterial
        ref={materialRef}
        color={"#010101"}
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
      {material && <Instances material={material} />}
    </>
  );
}

export default function Background() {

  const [whiteTheme, setWhiteTheme] = useState(false)

  function toggleTheme(value) {
    setWhiteTheme(value)
  }

  return (
    <>
      <Canvas
        style={{ position: "fixed", zIndex: 0 }}
        camera={{ position: [0, 0, 3] }}
        gl={{
          powerPreference: "high-performance",
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
      >
        <color attach="background" args={[whiteTheme ? "#999999" : "#050505"]} />
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
        <div className="content">
          <header>
            <Logo url={"img/logo.svg"} size={"5.2rem"} />
            <Logo url={"img/logo1.svg"} size={"5.5rem"} />
          </header>

          <footer>
            <ThemeButton toggle={toggleTheme}/>
            <ProgressBar />
          </footer>
          <SmoothScroll>
            <MainBlock />
            <MainBlock />
          </SmoothScroll>
        </div>
    </>
  );
}
