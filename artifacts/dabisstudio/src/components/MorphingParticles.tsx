

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface MorphingParticlesProps {
  progress: number; // 0 to 6 representing the morph state
  className?: string;
}

// --- Shader Code ---

const vertexShader = `
  uniform float uTime;
  uniform float uProgress;

  // Default 'position' attribute is used for Shape 0 (Sphere)
  attribute vec3 positionCube;
  attribute vec3 positionCode;
  attribute vec3 positionGraph;
  attribute vec3 positionDNA;
  attribute vec3 positionStar;
  attribute vec3 positionShield;

  attribute float aRandom; // Single random value per particle for color/noise var

  varying vec3 vColor;
  varying float vAlpha;

  // Simple Simplex Noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //   x0 = x0 - 0.0 + 0.0 * C.xxx;
    //   x1 = x0 - i1  + 1.0 * C.xxx;
    //   x2 = x0 - i2  + 2.0 * C.xxx;
    //   x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  // Color Palette Helpers
  vec3 colorPrimary = vec3(0.898, 0.012, 0.224); // #E50339
  vec3 colorWhite   = vec3(0.961, 0.961, 0.961); // #F5F5F5
  vec3 colorBlue    = vec3(0.3, 0.4, 0.9); // Secondary accent

  vec3 getThemeColor(int theme, float rnd) {
     vec3 c = vec3(1.0);
     if (theme == 0) { // Mixed (Red/White)
        c = mix(colorWhite, colorPrimary, step(0.5, rnd));
     } else if (theme == 1) { // Secondary (Blue/White)
        c = mix(colorWhite, colorBlue, step(0.6, rnd));
     } else if (theme == 2) { // Primary (Red)
        c = mix(colorWhite, colorPrimary, step(0.2, rnd));
     }

     // Add slight noise variation
     c += (rnd - 0.5) * 0.1;
     return c;
  }

  void main() {
    vec3 pos = position; // Shape 0 (Sphere)
    vec3 col = getThemeColor(0, aRandom); // Shape 0 Color

    // Target Positions & Colors
    vec3 pos1 = positionCube;
    vec3 col1 = getThemeColor(1, aRandom);

    vec3 pos2 = positionCode;
    vec3 col2 = getThemeColor(1, aRandom);

    vec3 pos3 = positionGraph;
    vec3 col3 = getThemeColor(2, aRandom);

    vec3 pos4 = positionDNA;
    vec3 col4 = getThemeColor(0, aRandom);

    vec3 pos5 = positionStar;
    vec3 col5 = getThemeColor(2, aRandom);

    vec3 pos6 = positionShield;
    vec3 col6 = getThemeColor(1, aRandom);

    float t = uProgress;

    // Mix Logic (Linear Interpolation)
    if (t < 1.0) {
       pos = mix(position, pos1, t);
       col = mix(col, col1, t);
    } else if (t < 2.0) {
       float f = t - 1.0;
       pos = mix(pos1, pos2, f);
       col = mix(col1, col2, f);
    } else if (t < 3.0) {
       float f = t - 2.0;
       pos = mix(pos2, pos3, f);
       col = mix(col2, col3, f);
    } else if (t < 4.0) {
       float f = t - 3.0;
       pos = mix(pos3, pos4, f);
       col = mix(col3, col4, f);
    } else if (t < 5.0) {
       float f = t - 4.0;
       pos = mix(pos4, pos5, f);
       col = mix(col4, col5, f);
    } else {
       float f = clamp(t - 5.0, 0.0, 1.0);
       pos = mix(pos5, pos6, f);
       col = mix(col5, col6, f);
    }

    // Turbulence
    float noiseFreq = 0.5;
    float noiseAmp = 0.15;
    // Vary noise key by time to make it turbulent
    vec3 noisePos = vec3(pos.x * noiseFreq + uTime * 0.5, pos.y * noiseFreq + uTime * 0.5, pos.z * noiseFreq);
    pos.x += snoise(noisePos) * noiseAmp;
    pos.y += snoise(noisePos + 100.0) * noiseAmp;
    pos.z += snoise(noisePos + 200.0) * noiseAmp;

    vColor = col;
    vAlpha = 1.0;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Size attenuation
    gl_PointSize = (4.0 / -mvPosition.z) * 15.0;
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
    if (alpha <= 0.0) discard;
    gl_FragColor = vec4(vColor, alpha * vAlpha);
  }
`;

// --- Helpers ---
const POINTS_COUNT = 8000;

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
      positions[i * 3] = (Math.random() - 0.5) * side;
      positions[i * 3 + 1] = (Math.random() - 0.5) * side;
      positions[i * 3 + 2] = (Math.random() - 0.5) * side;
    }
    return positions;
};

const getCodePositions = (count: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const section = Math.random();
      let x, y, z;
      if (section < 0.33) {
        const side = Math.random() > 0.5 ? 1 : -1;
        const t = Math.random() * 10;
        const angle = Math.PI / 4;
        x = -8 + t * Math.cos(angle);
        y = side * t * Math.sin(angle);
        z = (Math.random() - 0.5) * 4;
      } else if (section < 0.66) {
        const side = Math.random() > 0.5 ? 1 : -1;
        const t = Math.random() * 10;
        const angle = Math.PI / 4;
        x = 8 - t * Math.cos(angle);
        y = side * t * Math.sin(angle);
        z = (Math.random() - 0.5) * 4;
      } else {
        const t = Math.random() * 16 - 8;
        x = t * 0.4;
        y = t;
        z = (Math.random() - 0.5) * 4;
      }
      x += (Math.random() - 0.5) * 1;
      y += (Math.random() - 0.5) * 1;
      z += (Math.random() - 0.5) * 1;
      positions[i * 3] = x * 1.5;
      positions[i * 3 + 1] = y * 1.5;
      positions[i * 3 + 2] = z;
    }
    return positions;
};

const getGraphPositions = (count: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const bar = Math.floor(Math.random() * 4);
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
      const y = (Math.random() * hLimit) - 8;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
};

const getDNAPositions = (count: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 20 - 10;
      const strand = Math.random() > 0.5 ? 0 : Math.PI;
      const radius = 6;
      const freq = 0.5;
      let x = radius * Math.cos(t * freq + strand);
      let z = radius * Math.sin(t * freq + strand);
      let y = t * 1.5;
      if (Math.random() > 0.7) {
         const r = Math.random();
         x = x * r;
         z = z * r;
      }
      x += (Math.random() - 0.5) * 0.5;
      y += (Math.random() - 0.5) * 0.5;
      z += (Math.random() - 0.5) * 0.5;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
};

const getStarPositions = (count: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const arm = Math.floor(Math.random() * 4);
        const dist = Math.pow(Math.random(), 2) * 15;
        let x=0, y=0, z=0;
        const width = 1.0 * (1.0 - dist/15.0);

        if (arm === 0) { x = dist; y = (Math.random()-0.5)*width*4; }
        else if (arm === 1) { x = -dist; y = (Math.random()-0.5)*width*4; }
        else if (arm === 2) { y = dist; x = (Math.random()-0.5)*width*4; }
        else { y = -dist; x = (Math.random()-0.5)*width*4; }

        z = (Math.random()-0.5) * width * 4;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }
    return positions;
};

const getShieldPositions = (count: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        let valid = false;
        let x=0, y=0, z=0;
        let attempts = 0;
        while (!valid && attempts < 20) {
             attempts++;
             x = (Math.random() - 0.5) * 16;
             y = (Math.random() * 20) - 10;
             z = (Math.random() - 0.5) * 2;

             if (y > 5) {
                 if (Math.abs(x) > 8) continue;
             }
             if (y < 0) {
                 const maxW = 8.0 * (1.0 - (Math.abs(y)/12.0));
                 if (Math.abs(x) > maxW) continue;
             }
             z += Math.cos(x/8.0 * Math.PI/2) * 3 - 1.5;
             valid = true;
        }
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }
    return positions;
};

const getRandomAttributes = (count: number) => {
   const randoms = new Float32Array(count);
   for (let i = 0; i < count; i++) {
      randoms[i] = Math.random();
   }
   return randoms;
};


function Scene({ progress }: { progress: number }) {
  const meshRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();

    // Positions
    const posSphere = getSpherePositions(POINTS_COUNT);
    const posCube = getCubePositions(POINTS_COUNT);
    const posCode = getCodePositions(POINTS_COUNT);
    const posGraph = getGraphPositions(POINTS_COUNT);
    const posDNA = getDNAPositions(POINTS_COUNT);
    const posStar = getStarPositions(POINTS_COUNT);
    const posShield = getShieldPositions(POINTS_COUNT);
    const aRandom = getRandomAttributes(POINTS_COUNT);

    // Attribute assignment
    // 'position' is Shape 0 (Sphere)
    geom.setAttribute("position", new THREE.BufferAttribute(posSphere, 3));
    geom.setAttribute("positionCube", new THREE.BufferAttribute(posCube, 3));
    geom.setAttribute("positionCode", new THREE.BufferAttribute(posCode, 3));
    geom.setAttribute("positionGraph", new THREE.BufferAttribute(posGraph, 3));
    geom.setAttribute("positionDNA", new THREE.BufferAttribute(posDNA, 3));
    geom.setAttribute("positionStar", new THREE.BufferAttribute(posStar, 3));
    geom.setAttribute("positionShield", new THREE.BufferAttribute(posShield, 3));

    geom.setAttribute("aRandom", new THREE.BufferAttribute(aRandom, 1));

    return geom;
  }, []);

  // Memoize uniforms to prevent re-instantiation issues
  const uniforms = useMemo(() => ({
     uTime: { value: 0 },
     uProgress: { value: 0 },
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        materialRef.current.uniforms.uProgress.value = progress;
    }

    if (meshRef.current) {
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={meshRef} geometry={geometry}>
       <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={uniforms}
       />
    </points>
  );
}

export default function MorphingParticles({ progress, className }: MorphingParticlesProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 40], fov: 45 }}
        gl={{ failIfMajorPerformanceCaveat: false }}
      >
        <fog attach="fog" args={["#000000", 20, 60]} />
        <Scene progress={progress} />
      </Canvas>
    </div>
  );
}
