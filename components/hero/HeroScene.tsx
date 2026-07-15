"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * The single signature 3D moment: ~15k particles that begin as scattered
 * noise and organize into an ascending growth curve as the visitor scrolls
 * the first ~0.9 viewport. Chaos → growth, rendered in geometry.
 *
 * Budget: one draw call, one shader pair, zero textures, zero models.
 * This is the ONLY file in the project that imports three/R3F, keeping the
 * 3D bundle behind a single dynamic-import boundary.
 */

const COUNT = 15000;

const vertexShader = /* glsl */ `
  uniform float uProgress;
  uniform float uTime;
  attribute vec3 aTarget;
  attribute float aRand;
  varying float vMix;
  varying float vRand;

  void main() {
    // Per-particle stagger so the curve assembles as a wave, not a snap.
    float d = clamp(uProgress * 1.4 - aRand * 0.4, 0.0, 1.0);
    float e = d * d * (3.0 - 2.0 * d);
    vec3 pos = mix(position, aTarget, e);

    float loose = 1.0 - e * 0.75;
    pos.x += sin(uTime * 0.6 + aRand * 43.0) * 0.08 * loose;
    pos.y += cos(uTime * 0.5 + aRand * 29.0) * 0.08 * loose;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (1.4 + aRand * 1.8) * (18.0 / -mv.z);
    vMix = e;
    vRand = aRand;
  }
`;

const fragmentShader = /* glsl */ `
  varying float vMix;
  varying float vRand;

  void main() {
    float a = smoothstep(0.5, 0.1, length(gl_PointCoord - 0.5));
    // Blue #1D4ED8 family drifting toward tint highlights as particles settle.
    vec3 base = mix(vec3(0.24, 0.4, 0.9), vec3(0.75, 0.85, 1.0), vRand * vRand);
    vec3 col = mix(base * 0.7, base, vMix);
    gl_FragColor = vec4(col, a * (0.3 + 0.7 * vMix));
  }
`;

function Particles() {
  const material = useRef<THREE.ShaderMaterial>(null);

  const { positions, targets, rands } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const targets = new Float32Array(COUNT * 3);
    const rands = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      // Chaos: loose cloud filling the frame.
      positions[i * 3] = (Math.random() - 0.5) * 17;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      // Order: an ascending growth curve, bottom-left to top-right,
      // denser and tighter toward the tip.
      const t = Math.pow(Math.random(), 0.75);
      const spread = 0.55 * (1.0 - t * 0.7);
      targets[i * 3] = -7 + t * 14 + (Math.random() - 0.5) * spread;
      targets[i * 3 + 1] =
        -2.6 + Math.pow(t, 2.1) * 5.4 + (Math.random() - 0.5) * spread;
      targets[i * 3 + 2] = (Math.random() - 0.5) * spread * 2.0;

      rands[i] = Math.random();
    }
    return { positions, targets, rands };
  }, []);

  useFrame((state) => {
    if (!material.current) return;
    const vh = state.size.height;
    const progress = Math.min(window.scrollY / (vh * 0.9), 1);
    material.current.uniforms.uProgress.value = progress;
    material.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aTarget" args={[targets, 3]} />
        <bufferAttribute attach="attributes-aRand" args={[rands, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ uProgress: { value: 0 }, uTime: { value: 0 } }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden="true"
    >
      <Particles />
    </Canvas>
  );
}
