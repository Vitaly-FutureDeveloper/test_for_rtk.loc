import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import './App.css';
import { SpringValue, useSpring, to } from 'react-spring';
import { Vector3 } from 'three';
import {VelocityShader} from "three/examples/jsm/shaders/VelocityShader";
import PlanesCube from './components/PlanesCube/PlanesCube';

const Ball = React.lazy(() => import("./components/Ball/Ball"));

interface AppSpringProps {
  // position: [number, number, number];
  // velocity: [number, number, number];
}


const App: React.FC = () => {
  // const springProps = useSpring<AppSpringProps>({
  //   position: [0, 0, 0],
  //   velocity: [2, 1, 0],
  // });

  // const positionVector = to(springProps.position, (x, y, z) => new Vector3(x, y, z));

  return (
    <main className="main">
    <React.Suspense fallback={null}>
    <Canvas className="canvas"  camera={ { fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] } }>
      <ambientLight intensity={0.5} />
      <pointLight position={[-5, 5, 9]} intensity={1} decay={0} />
      <Physics gravity={[0, 0, 0]}>
        <group>
          <PlanesCube size={[40, 40]} thickness={0.001} />
        {/*  <Ball position={springProps.position} velocity={springProps.velocity} />*/}
          <Ball position={[0, 0, 0]} velocity={[1, 1, 1]} />
        </group>
      </Physics>
    </Canvas>
    </React.Suspense>
    </main>
  );
};

export default App;