'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import styled from '@emotion/styled';

interface ThreeSceneProps {
  className?: string;
  interactionType?: 'particles' | 'waves' | 'geometric';
  color?: string;
  density?: number;
}

const SceneContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default function ThreeScene({
  className,
  interactionType = 'particles',
  color = '#ffffff',
  density = 100
}: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current || isInitialized) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles based on interaction type
    if (interactionType === 'particles') {
      createParticles(scene, density, color);
    } else if (interactionType === 'waves') {
      createWaves(scene, color);
    } else if (interactionType === 'geometric') {
      createGeometric(scene, color);
    }

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();

      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    setIsInitialized(true);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);

      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      if (particlesRef.current) {
        if (particlesRef.current.geometry) {
          particlesRef.current.geometry.dispose();
        }
        if (particlesRef.current.material instanceof THREE.Material) {
          particlesRef.current.material.dispose();
        }
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [interactionType, color, density, isInitialized]);

  // Animation loop
  useEffect(() => {
    if (!isInitialized) return;

    const animate = () => {
      requestAnimationFrame(animate);

      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        // Update particles based on mouse position
        if (particlesRef.current && interactionType === 'particles') {
          const particles = particlesRef.current.geometry as THREE.BufferGeometry;
          const positions = particles.attributes.position.array as Float32Array;

          for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i];
            const y = positions[i + 1];
            const z = positions[i + 2];

            // Calculate distance from mouse
            const distX = x - mousePosition.current.x * 5;
            const distY = y - mousePosition.current.y * 5;
            const distance = Math.sqrt(distX * distX + distY * distY);

            // Move particles away from mouse
            if (distance < 1) {
              positions[i] += distX * 0.02;
              positions[i + 1] += distY * 0.02;
            } else {
              // Slowly return to original position
              positions[i] += (0 - positions[i]) * 0.01;
              positions[i + 1] += (0 - positions[i + 1]) * 0.01;
            }
          }

          particles.attributes.position.needsUpdate = true;
        }

        // Rotate the scene slightly for ambient movement
        if (sceneRef.current.children.length > 0) {
          sceneRef.current.rotation.x += 0.001;
          sceneRef.current.rotation.y += 0.001;
        }

        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();
  }, [interactionType, isInitialized]);

  // Create particles
  const createParticles = (scene: THREE.Scene, density: number, color: string) => {
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = density * 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;
  };

  // Create waves
  const createWaves = (scene: THREE.Scene, color: string) => {
    const geometry = new THREE.PlaneGeometry(15, 15, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });

    const waves = new THREE.Mesh(geometry, material);
    waves.rotation.x = -Math.PI / 2;
    waves.position.y = -2;

    scene.add(waves);
    particlesRef.current = waves as unknown as THREE.Points;

    // Animate waves
    const positions = geometry.attributes.position.array as Float32Array;
    const count = positions.length / 3;

    gsap.to({}, {
      duration: 2,
      repeat: -1,
      onUpdate: () => {
        const time = Date.now() * 0.001;

        for (let i = 0; i < count; i++) {
          const x = geometry.attributes.position.getX(i);
          const y = geometry.attributes.position.getY(i);
          const distance = Math.sqrt(x * x + y * y);

          const z = Math.sin(distance * 0.5 + time) * 0.5;
          geometry.attributes.position.setZ(i, z);
        }

        geometry.attributes.position.needsUpdate = true;
      }
    });
  };

  // Create geometric shapes
  const createGeometric = (scene: THREE.Scene, color: string) => {
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    particlesRef.current = mesh as unknown as THREE.Points;

    // Animate with GSAP
    gsap.to(mesh.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  };

  return <SceneContainer ref={containerRef} className={className} />;
}
