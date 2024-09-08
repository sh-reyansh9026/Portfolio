// src/components/Background.jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// Floating geometries component
const FloatingGeometries = () => {
  const sphereRef = useRef();
  const torusRef = useRef();

  // Animate the geometries
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    // Sphere float and rotate
    sphereRef.current.position.y = Math.sin(elapsedTime) * 1;
    sphereRef.current.rotation.x = elapsedTime * 0.3;
    sphereRef.current.rotation.y = elapsedTime * 0.3;

    // Torus float and rotate
    torusRef.current.position.y = Math.cos(elapsedTime) * 1.5;
    torusRef.current.rotation.x = elapsedTime * 0.5;
    torusRef.current.rotation.y = elapsedTime * 0.5;
  });

  return (
    <>
      <mesh ref={sphereRef} position={[-4, 0, -5]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#ff6347" wireframe />
      </mesh>

      <mesh ref={torusRef} position={[3, -1, -5]}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial color="#32cd32" wireframe />
      </mesh>
    </>
  );
};

const Background = () => {
  return (
    <Canvas className="canvas-background">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Add floating geometries */}
      <FloatingGeometries />
    </Canvas>
  );
};

export default Background;
