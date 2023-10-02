import React from "react";
import * as THREE from "three";
import {usePlane} from "@react-three/cannon";
import { Plane } from "@react-three/drei";


interface PlaneMaterialProps{
  size: [number, number],
  rotation: [number, number, number]
  position: [number, number, number]
}

const PlaneMaterial: React.FC<PlaneMaterialProps> = ({size, rotation, position}) => {

  const [ref] = usePlane(() => ({
    // mass: 20,
    args: [1],
    // friction: 1,

    onCollide: (e) => {

    },
  })) as any;

  return (
    <mesh ref={ref}>
    <Plane args={size} rotation={rotation} position={position}>
      <meshStandardMaterial color="blue" side={THREE.DoubleSide} transparent opacity={0.1} />
    </Plane>
    </mesh>
  );
};

export default React.memo(PlaneMaterial);