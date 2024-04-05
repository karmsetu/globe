/* eslint-disable react/no-unknown-property */
import './App.css';
import { Canvas } from '@react-three/fiber';
import Sphere from './components/Sphere';
import { OrbitControls, Stats } from '@react-three/drei';
import { useRef } from 'react';

function App() {
    const sceneRef = useRef();
    console.log(sceneRef);
    return (
        <Canvas
            className="bg-slate-900"
            ref={sceneRef}
            gl={{ antialias: true }}
        >
            <directionalLight position={[1, 2, 3]} />
            <Sphere />
            <OrbitControls enableDamping={true} autoRotate={true} />
            <Stats />
        </Canvas>
    );
}

export default App;
