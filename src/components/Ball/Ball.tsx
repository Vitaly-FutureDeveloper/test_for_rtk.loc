import React, { useRef } from 'react';
import {useFrame, Vector3} from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { Mesh } from 'three';
import { animated, useSpring, SpringValue } from 'react-spring';

// interface BallProps {
//   position: SpringValue<[number, number, number]>;
//   velocity: SpringValue<[number, number, number]>;
// }

interface BallProps {
  position: Vector3 | undefined;
  // velocity: SpringValue<[number, number, number]>;
}


const Ball: React.FC<BallProps> = ({position}) => {
  const meshRef = useRef<Mesh>(null);


  // const [ref] = useSphere(() => ({
  //   mass: 1,
  //   position: position.get(),
  //   velocity: velocity.get(),
  //   onCollide: () => {
  //     // Обработка столкновений
  //   },
  // }));
  //
  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.position.copy(ref.current!.position);
  //   }
  // });

  // const springProps = useSpring({ position: position });

  return (

    // <animated.mesh ref={meshRef} position={springProps.position}>
    <mesh position={position}>
      <sphereGeometry args={[1, 30, 30]} />
      <meshStandardMaterial color="red" />
      </mesh>
    // </animated.mesh>
  );
};

export default React.memo(Ball);