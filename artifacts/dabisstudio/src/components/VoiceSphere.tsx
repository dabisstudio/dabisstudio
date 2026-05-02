

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface VoiceSphereProps {
  isActive: boolean;
  color?: string;
}

function SphereParticles({ isActive, color = "#E50339" }: VoiceSphereProps) {
  const ref = useRef<any>(null);
  const count = 2500; // Dense but performant
  const radius = 1.8;

  // Initial Positions (Surface of Sphere)
  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initPos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Uniform distribution on sphere surface
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      initPos[i * 3] = x;
      initPos[i * 3 + 1] = y;
      initPos[i * 3 + 2] = z;
    }
    return [pos, initPos];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.getElapsedTime();
    const positionsAttr = ref.current.geometry.attributes.position;
    const array = positionsAttr.array;

    // Rotation
    ref.current.rotation.y = time * 0.1;

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = initialPositions[i3];
        const y = initialPositions[i3 + 1];
        const z = initialPositions[i3 + 2];

        // Dynamic Animation Logic
        let scale = 1;

        if (isActive) {
            // Wave effect based on Y position and Time
            // Frequency increases, amplitude varies
            const wave = Math.sin(y * 4 + time * 8) * 0.2 +
                         Math.sin(x * 4 + time * 5) * 0.1;

            // Noise / Jitter for "Voice" feeling
            const noise = (Math.random() - 0.5) * 0.05;

            scale = 1 + wave + noise;
        } else {
            // Breathing idle effect
            scale = 1 + Math.sin(time * 0.5) * 0.02;
        }

        array[i3] = x * scale;
        array[i3 + 1] = y * scale;
        array[i3 + 2] = z * scale;
    }

    positionsAttr.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.035} // Small particles
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function VoiceSphere({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 60 }}
        gl={{ failIfMajorPerformanceCaveat: false }}
      >
        {/* Transparent background to blend with container */}
        <SphereParticles isActive={isActive} />
      </Canvas>
    </div>
  );
}
