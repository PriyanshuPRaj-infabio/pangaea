"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Line, useTexture } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

function Particles(props: any) {
  const ref = useRef<any>(null);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 2 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

function SolidGlobe() {
  const ref = useRef<THREE.Mesh>(null);
  
  // Load the grayscale specular map texture to extract continents
  const texture = useTexture("/earth-specular.jpg");

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        bumpMap={texture}
        bumpScale={0.08}
        color="#6b7280" // Logo style grey (gray-500)
        roughness={0.5}
        metalness={0.8}
      />
    </mesh>
  );
}

function WireframeGlobe() {
  const ref = useRef<any>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.51, 64, 64]} />
      <meshBasicMaterial
        color="#C5A059"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

function OrbitalRings() {
  const rings = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (rings.current) {
      rings.current.rotation.z += delta * 0.02;
      rings.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2 + Math.PI / 3;
    }
  });

  const generateRing = (radius: number, points: number) => {
    const pts = [];
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
    }
    return pts;
  };

  const ring1 = useMemo(() => generateRing(2.2, 100), []);
  const ring2 = useMemo(() => generateRing(2.6, 100), []);

  return (
    <group ref={rings}>
      <Line points={ring1} color="white" opacity={0.15} transparent lineWidth={1} />
      <Line points={ring2} color="#C5A059" opacity={0.4} transparent lineWidth={1} />
    </group>
  );
}

function MouseLight() {
  const light = useRef<THREE.PointLight>(null);
  const { viewport, mouse } = useThree();

  useFrame(() => {
    if (light.current) {
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      light.current.position.set(x, y, 2);
    }
  });

  return <pointLight ref={light} color="#C5A059" intensity={5} distance={6} />;
}

function CameraRig() {
  useFrame((state) => {
    const scrollY = window.scrollY;
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 4 - scrollY * 0.002, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, scrollY * 0.001, 0.05);
  });
  return null;
}

export default function HeroGlobe() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <fog attach="fog" args={["#0a0a0a", 3, 12]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <MouseLight />
        <CameraRig />
        
        <Suspense fallback={null}>
          <SolidGlobe />
        </Suspense>
        
        <WireframeGlobe />
        <Particles />
        <OrbitalRings />
      </Canvas>
      
      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0a_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent pointer-events-none opacity-50" />
    </div>
  );
}
