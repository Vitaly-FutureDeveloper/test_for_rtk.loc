import { useBox } from "@react-three/cannon";
import React, {useRef} from "react";
import * as THREE from 'three'
import { Plane } from "@react-three/drei";
import {Vector2, Vector3} from "@react-three/fiber";
import {NormalBufferAttributes, Object3DEventMap} from "three";
import PlaneMaterial from "./PlaneMaterial/PlaneMaterial";


interface PlanesCubeProps {
  size: [number, number],
  thickness: number;
}

const PlanesCube: React.FC<PlanesCubeProps> = ({size, thickness}) => {

  const [boxRef] = useBox(() => ({
    args: [...size, thickness],
    rotation: [-Math.PI / 2, 0, 0],
  })) as any;

  return (
      <group ref={boxRef}>

        {/*Зад стенка*/}
        <PlaneMaterial size={size} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} />

        {/*Верх стенка*/}
        <PlaneMaterial size={size} rotation={[0, 0, 0]} position={[0, 0, -20]} />

        {/*Ниж стенка*/}
        <PlaneMaterial size={size} rotation={[0, 0, 0]} position={[0, 0, 20]} />

        {/*Прав стенка*/}
        <PlaneMaterial size={size} rotation={[0, Math.PI / 2, 0]} position={[-20, 0, 0]} />

        {/*Лев стенка*/}
        <PlaneMaterial size={size} rotation={[0, Math.PI / 2, 0]} position={[20, 0, 0]} />

        {/*Передняя стенка*/}
        <PlaneMaterial size={size} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} />
      </group>
  );
};

export default React.memo(PlanesCube);