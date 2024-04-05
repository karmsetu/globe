/* eslint-disable react/no-unknown-property */
import './App.css';
import { Canvas } from '@react-three/fiber';
import Sphere from './components/Sphere';
import { OrbitControls, Stats } from '@react-three/drei';
import { useRef } from 'react';
import Camera from './components/Camera';

function App() {
    const sceneRef = useRef();

    // console.log(mouse);

    // console.log(sceneRef);
    return (
        <Canvas
            className="bg-slate-900"
            ref={sceneRef}
            gl={{ antialias: true }}
            pixelratio={window.devicePixelRatio}
        >
            <Camera />
            <directionalLight position={[1, 2, 3]} />
            <Sphere />
            <OrbitControls enableDamping={true} autoRotate={true} />
            <Stats />
        </Canvas>
    );
}

export default App;
