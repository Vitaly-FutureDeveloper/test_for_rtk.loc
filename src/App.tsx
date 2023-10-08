import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Physics} from '@react-three/cannon';
import styles from "./components/ControlPanel/ControlPanel.module.css";
import './App.css';

const Ball = React.lazy(() => import("./components/Ball/Ball"));
const ControlPanel = React.lazy(() => import("./components/ControlPanel/ControlPanel"));


const App: React.FC = () => {

  return (
    <main className="main">
      <React.Suspense fallback={null}>
        <Canvas className="canvas" camera={{fov: 75, near: 0.1, far: 1000, position: [0, 0, 5]}}>
          <ambientLight intensity={0.5}/>
          <pointLight position={[-5, 5, 9]} intensity={1} decay={0}/>
            <group>
              {[...Array(20)].map((n, i) => <Ball key={i}/>)}
            </group>
        </Canvas>
        <ControlPanel />
      </React.Suspense>
    </main>
  );
};

export default App;