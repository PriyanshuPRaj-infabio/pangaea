"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function seededNoise(index: number) {
  const value = Math.sin(index * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function AuroraPlane() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const { viewport, pointer } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uAccent: { value: new THREE.Color("#c5a059") }, // Gold accent
      uSea: { value: new THREE.Color("#102a45") },    // Deep electric blue
      uCyan: { value: new THREE.Color("#1f8f9a") },   // Soft cyan glow
      uInk: { value: new THREE.Color("#050816") },    // Deep space base
    }),
    [],
  );

  useFrame((state) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = state.clock.elapsedTime;
    material.current.uniforms.uPointer.value.lerp(pointer, 0.05);
  });

  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[viewport.width * 2.2, viewport.height * 2.2, 128, 128]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        vertexShader={`
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uPointer;

          void main() {
            vUv = uv;
            vec3 pos = position;
            // High-end wavy distortion for organic atmospheric movements
            float waveA = sin((pos.x * 0.28) + uTime * 0.18 + uPointer.x * 1.1);
            float waveB = cos((pos.y * 0.35) - uTime * 0.14 + uPointer.y * 0.9);
            pos.z += (waveA + waveB) * 0.35;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uPointer;
          uniform vec3 uAccent;
          uniform vec3 uSea;
          uniform vec3 uCyan;
          uniform vec3 uInk;

          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
          }

          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                       mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
          }

          void main() {
            vec2 uv = vUv;
            vec2 center = uv - 0.5;
            float vignette = smoothstep(0.92, 0.15, length(center));

            // Layered noise to construct animated nebulas
            float n1 = noise(uv * 2.5 + uTime * 0.04 + uPointer * 0.015);
            float n2 = noise(uv * 5.5 - uTime * 0.06);

            // Base deep ink background
            vec3 color = uInk;

            // Ribbons of electric blue
            float ribbon = smoothstep(0.25, 0.75, sin(uv.x * 3.0 + n1 * 2.8) * cos(uv.y * 2.5 + n2 * 1.8));
            color = mix(color, uSea, ribbon * 0.55);

            // Cyan glowing energy lines
            float glow = smoothstep(0.35, 0.72, n1 * n2);
            color = mix(color, uCyan, glow * 0.42);

            // Shifting rays of gold
            float goldRay = smoothstep(0.48, 0.95, sin(uv.x * 1.8 - uv.y * 2.2 + uTime * 0.025));
            color = mix(color, uAccent, goldRay * 0.22);

            float alpha = vignette * (0.42 + ribbon * 0.28);
            gl_FragColor = vec4(color, alpha);
          }
        `}
      />
    </mesh>
  );
}

function DataRain() {
  const points = useRef<THREE.Points>(null);
  const { pointer } = useThree();

  const positions = useMemo(() => {
    const data = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i += 1) {
      data[i * 3] = (seededNoise(i + 1) - 0.5) * 16;
      data[i * 3 + 1] = (seededNoise(i + 19) - 0.5) * 10;
      data[i * 3 + 2] = (seededNoise(i + 47) - 0.5) * 6;
    }
    return data;
  }, []);

  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.y = THREE.MathUtils.lerp(points.current.rotation.y, pointer.x * 0.12, 0.03);
    points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, -pointer.y * 0.08, 0.03);
    points.current.position.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.18;
    points.current.rotation.z += delta * 0.015;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      {/* Soft warm gold stellar dust points */}
      <pointsMaterial color="#FFEAB5" size={0.018} transparent opacity={0.45} depthWrite={false} />
    </points>
  );
}

export default function AtmosphericField() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <AuroraPlane />
        <DataRain />
      </Canvas>
      {/* Gradient maps overlaying the viewport to create rich atmospheric depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_0%,rgba(5,8,22,0.3)_40%,#050816_85%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,8,22,0.35),rgba(5,8,22,0.06)_45%,rgba(7,17,31,0.92))]" />
    </div>
  );
}
