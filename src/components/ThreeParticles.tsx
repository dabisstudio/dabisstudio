"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ParticleFieldProps {
  shapeIndex: number; // 0=Sphere, 1=Cube, 2=Code, 3=DNA, 4=Graph
  color?: string;
}

// Shape Generators
const getSpherePositions = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 20;
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const distance = Math.cbrt(Math.random()) * r;
    positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = distance * Math.cos(phi);
  }
  return positions;
};

const getCubePositions = (count: number) => {
  const positions = new Float32Array(count * 3);
  const side = 22;
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * side;
    const y = (Math.random() - 0.5) * side;
    const z = (Math.random() - 0.5) * side;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

const getCodePositions = (count: number) => {
  const positions = new Float32Array(count * 3);
  // Shape: < />
  for (let i = 0; i < count; i++) {
    const section = Math.random();
    let x, y, z;

    // Distribute among 3 distinct shapes roughly
    if (section < 0.33) {
      // "<" shape: two lines meeting at left
      // top leg: x from -5 to -10, y from 0 to 5
      // bottom leg: x from -5 to -10, y from 0 to -5
      const side = Math.random() > 0.5 ? 1 : -1;
      // simple V shape on Y axis, rotated 90 deg
      const t = Math.random() * 10; // length
      const angle = Math.PI / 4;
      x = -8 + t * Math.cos(angle);
      y = side * t * Math.sin(angle);
      z = (Math.random() - 0.5) * 4;
    } else if (section < 0.66) {
      // ">" shape
      const side = Math.random() > 0.5 ? 1 : -1;
      const t = Math.random() * 10;
      const angle = Math.PI / 4;
      x = 8 - t * Math.cos(angle);
      y = side * t * Math.sin(angle);
      z = (Math.random() - 0.5) * 4;
    } else {
      // "/" shape
      const t = Math.random() * 16 - 8; // -8 to 8 height
      x = t * 0.4; // slight tilt
      y = t;
      z = (Math.random() - 0.5) * 4;
    }

    // Add some noise (fuzziness)
    x += (Math.random() - 0.5) * 1;
    y += (Math.random() - 0.5) * 1;
    z += (Math.random() - 0.5) * 1;

    positions[i * 3] = x * 1.5;
    positions[i * 3 + 1] = y * 1.5;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

const getDNAPositions = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = Math.random() * 20 - 10; // vertical range
    // Double helix
    const strand = Math.random() > 0.5 ? 0 : Math.PI;
    const radius = 6;
    const freq = 0.5;

    // Main strands
    let x = radius * Math.cos(t * freq + strand);
    let z = radius * Math.sin(t * freq + strand);
    let y = t * 1.5;

    // Fill volume slightly
    if (Math.random() > 0.7) {
       // Nucleotides (rungs)
       const r = Math.random();
       x = x * r;
       z = z * r;
    }

    // Noise
    x += (Math.random() - 0.5) * 0.5;
    y += (Math.random() - 0.5) * 0.5;
    z += (Math.random() - 0.5) * 0.5;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

const getGraphPositions = (count: number) => {
  const positions = new Float32Array(count * 3);
  // 3-4 Bars rising
  for (let i = 0; i < count; i++) {
    const bar = Math.floor(Math.random() * 4); // 0,1,2,3
    let hLimit = 0;
    let xBase = 0;

    if (bar === 0) { xBase = -10; hLimit = 5; }
    else if (bar === 1) { xBase = -3; hLimit = 10; }
    else if (bar === 2) { xBase = 4; hLimit = 15; }
    else { xBase = 11; hLimit = 8; }

    const w = 4;
    const d = 4;

    const x = xBase + (Math.random() - 0.5) * w;
    const z = (Math.random() - 0.5) * d;
    const y = (Math.random() * hLimit) - 8; // Start from bottom -8

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
};


function ParticleField({ shapeIndex, color }: ParticleFieldProps) {
  const ref = useRef<any>(null);
  const count = 5000;

  // Memoize all shapes
  const shapes = useMemo(() => [
    getSpherePositions(count),
    getCubePositions(count),
    getCodePositions(count),
    getDNAPositions(count),
    getGraphPositions(count)
  ], []);

  // Current colors - single purple theme or custom
  const colors = useMemo(() => {
    const colors = new Float32Array(count * 3);
    const c = new THREE.Color();
    for (let i = 0; i < count; i++) {
        if (color) {
           c.set(color);
        } else {
           // Legacy Purple/Blue Scheme
           c.setHSL(0.66 + Math.random() * 0.05, 0.6, 0.6 + Math.random() * 0.2);
        }
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return colors;
  }, [color]);

  // Current interpolated positions
  const currentPositions = useMemo(() => new Float32Array(count * 3), []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotation constant
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 60;

      // Morphing Logic
      const target = shapes[shapeIndex] || shapes[0];
      const speed = 3 * delta; // Morph speed

      const positionsAttr = ref.current.geometry.attributes.position;

      for (let i = 0; i < count * 3; i++) {
         currentPositions[i] += (target[i] - currentPositions[i]) * speed;
      }

      positionsAttr.array = currentPositions;
      positionsAttr.needsUpdate = true;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={currentPositions} // Start with 0 or shape[0]
        colors={colors}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          vertexColors
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

interface ThreeParticlesProps {
   shapeIndex?: number;
   className?: string;
   color?: string;
   count?: number; // Added to support count variation if needed in future
}

export default function ThreeParticles({
   shapeIndex = 0,
   className = "fixed inset-0 -z-10 bg-background pointer-events-none",
   color
}: ThreeParticlesProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 35], fov: 50 }}>
        {/* Fog to blend particles into background - using legacy #020202 */}
        <fog attach="fog" args={["#020202", 20, 50]} />
        <ParticleField shapeIndex={shapeIndex} color={color} />
      </Canvas>
    </div>
  );
}
