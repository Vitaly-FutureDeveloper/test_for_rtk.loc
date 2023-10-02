import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { animated, config, useSpring } from '@react-spring/three';
import { Sphere } from "@react-three/drei";

interface BallProps {
  position: [number, number, number];
  velocity: [number, number, number];
}

const Ball: React.FC<BallProps> = ({ position, velocity }) => {
  const [ref] = useSphere(() => ({
    mass: 100,
    friction: 1,
    args: [1],
    position: position,
    velocity: velocity,
    onCollide: () => {
      console.log('collide');
    },
  })) as any;

  const meshRef = useRef<any>();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.copy(ref.current.position);
    }
  });

  const springProps = useSpring({ position: position, config: config.default });

  return (
    <animated.mesh ref={meshRef} position={springProps.position}>
      {/*<mesh ref={ref}>*/}
      <Sphere args={[1, 30, 30]} />
      <meshStandardMaterial color="red" />
      {/*</mesh>*/}
    </animated.mesh>
  );
};

export default React.memo(Ball);