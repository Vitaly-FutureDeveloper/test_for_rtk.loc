import React, {useEffect, useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber';
import {getRand, getRandomNumber} from '../../utils/getRandoms';



const Ball: React.FC = () => {

  const [randX, setRandX] = useState(getRand());
  const [randY, setRandY] = useState(getRand());
  const [randZ, setRandZ] = useState(getRand());

  useEffect(() => {
    setTimeout(() => {
      setRandX(-randX);
      setRandY(-randY);
      setRandZ(-randZ);
    }, getRandomNumber(1500, 3500));
  }, [randX, randY]);

  const meshRef = useRef<any>();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x += randX;
      meshRef.current.position.y += randY;
      meshRef.current.position.z += randZ;
    }
  });


  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.3, 30, 30]}/>
      <meshStandardMaterial color="red"/>
    </mesh>
  );
};

export default React.memo(Ball);