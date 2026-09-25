import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, MeshDistortMaterial } from '@react-three/drei';

// Subtle coffee bean
function CoffeeBean({ position, rotation, opacity = 0.4 }) {
  const ref = useRef();
  const speed = useMemo(() => 0.002 + Math.random() * 0.003, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += speed;
      ref.current.rotation.y += speed * 0.7;
    }
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <sphereGeometry args={[0.07, 8, 6]} />
      <meshStandardMaterial
        color="#3d1c0c"
        metalness={0.2}
        roughness={0.7}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

// Very faint background glow orb
function AmbientOrb({ position, color, scale }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[0.5, 10, 10]} />
      <MeshDistortMaterial
        color={color}
        metalness={0.3}
        roughness={0.5}
        distort={0.2}
        speed={1}
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

// Golden dust particles
function ParticleField() {
  const count = 180;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 7; // far back
    }
    return arr;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.012;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#d4a84b"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  const scroll = useScroll();
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      const offset = scroll.offset;
      groupRef.current.position.y = offset * -5;
      groupRef.current.rotation.y = offset * Math.PI * 0.06;
    }
  });

  return (
    <>
      {/* Soft lighting only */}
      <ambientLight intensity={0.12} color="#ff9966" />
      <directionalLight position={[5, 8, 5]} intensity={0.4} color="#ffd4a0" />
      <pointLight position={[-6, -4, -4]} intensity={0.2} color="#d4a84b" />

      <group ref={groupRef}>
        {/* Deep background glow orbs */}
        <AmbientOrb position={[-6, 2,  -9]}  color="#d4a84b" scale={3} />
        <AmbientOrb position={[ 7, -3, -11]} color="#a0522d" scale={4} />
        <AmbientOrb position={[ 0,  5, -13]} color="#c8874f" scale={5} />
        <AmbientOrb position={[-8, -5, -10]} color="#6b3520" scale={3.5} />

        {/* Small semi-transparent beans, pushed back */}
        {Array.from({ length: 16 }, (_, i) => (
          <CoffeeBean
            key={i}
            position={[
              (Math.random() - 0.5) * 18,
              (Math.random() - 0.5) * 14,
              (Math.random() - 0.5) * 3 - 6
            ]}
            rotation={[
              Math.random() * Math.PI,
              Math.random() * Math.PI,
              Math.random() * Math.PI,
            ]}
            opacity={0.15 + Math.random() * 0.2}
          />
        ))}

        {/* Particle dust */}
        <ParticleField />
      </group>
    </>
  );
}
