"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Line, useTexture } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const sphere = random.inSphere(new Float32Array(6000), { radius: 2.4 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.0035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.35}
        />
      </Points>
    </group>
  );
}

function SolidGlobe() {
  const ref = useRef<THREE.Mesh>(null);
  
  // Load the specular map texture
  const texture = useTexture("/earth-specular.jpg");

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 128, 128]} />
      <meshStandardMaterial
        map={texture}
        bumpMap={texture}
        bumpScale={0.14}
        color="#2b3b5c" // Luxury navy base
        roughness={0.25}
        metalness={0.8}
        emissive="#0d1f3d" // Deep navy emissive
        emissiveIntensity={0.4}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

function AtmosphereGlobe() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.52, 128, 128]} />
      <meshStandardMaterial
        transparent
        color="#1f8f9a" // Cyan glow highlights
        emissive="#1f8f9a"
        emissiveIntensity={0.25}
        roughness={1}
        metalness={0}
        opacity={0.12}
      />
    </mesh>
  );
}

function GlowGlobe() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.54, 64, 64]} />
      <meshBasicMaterial
        transparent
        color="#C5A059" // Warm gold outer aura
        opacity={0.07}
        wireframe={false}
      />
    </mesh>
  );
}

function OrbitalRings() {
  const rings = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (rings.current) {
      rings.current.rotation.z += delta * 0.015;
      rings.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15 + Math.PI / 3;
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

  const ring1 = useMemo(() => generateRing(2.1, 120), []);
  const ring2 = useMemo(() => generateRing(2.5, 120), []);

  return (
    <group ref={rings}>
      <Line points={ring1} color="#1f8f9a" opacity={0.25} transparent lineWidth={1} />
      <Line points={ring2} color="#C5A059" opacity={0.35} transparent lineWidth={1.2} />
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
      light.current.position.set(x, y, 2.5);
    }
  });

  return <pointLight ref={light} color="#FFEAB5" intensity={4.5} distance={7} />;
}

function CameraRig() {
  useFrame((state) => {
    const scrollY = window.scrollY;
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 3.8 - scrollY * 0.0015, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, scrollY * 0.0008, 0.05);
  });
  return null;
}

export default function HeroGlobe() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 3.8], fov: 48 }}>
        <fog attach="fog" args={["#050816", 3.5, 12]} />
        <ambientLight intensity={0.5} color="#07111F" />
        <directionalLight position={[10, 8, 5]} intensity={3.0} color="#ffffff" />
        {/* Electric blue backlight/fill */}
        <directionalLight position={[-8, -6, -5]} intensity={1.8} color="#102a45" />
        {/* Cyan center ambient light */}
        <pointLight position={[0, 0, 2]} intensity={2.0} color="#1f8f9a" />
        <MouseLight />
        <CameraRig />
        
        <Suspense fallback={null}>
          <SolidGlobe />
        </Suspense>
        
        <AtmosphereGlobe />
        <GlowGlobe />
        <Particles />
        <OrbitalRings />
      </Canvas>
      
      {/* Cinematic ambient shadows & gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050816_82%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent pointer-events-none opacity-85" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-transparent pointer-events-none opacity-55" />
    </div>
  );
}
