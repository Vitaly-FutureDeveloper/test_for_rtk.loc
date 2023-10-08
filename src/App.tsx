import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import './App.css';

import {getQuantityBalls} from "./redux/quantity-balls/quantity-balls-selectors";

const Ball = React.lazy(() => import("./components/Ball/Ball"));
const ControlPanel = React.lazy(() => import("./components/ControlPanel/ControlPanel"));


const App: React.FC = () => {

  return (
    <main className="main">
      <Provider store={store}>
        <AppProvider/>
      </Provider>
    </main>
  );
};

function AppProvider() {
  const quantityBalls = useSelector(getQuantityBalls);

  return (
    <React.Suspense fallback={null}>
      <div className="canvasBlock">
      <Canvas className="canvas" camera={{fov: 75, near: 0.1, far: 1000, position: [0, 0, 5]}}>
        <ambientLight intensity={0.5}/>
        <pointLight position={[-5, 5, 9]} intensity={1} color={"yellow"} decay={0}/>
        <group>
          {[...Array(quantityBalls)].map((n, i) => <Ball key={i}/>)}
        </group>
      </Canvas>
      </div>
      <ControlPanel/>
    </React.Suspense>
  )
}

export default App;