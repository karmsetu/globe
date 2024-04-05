import { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

function Camera() {
    const cameraRef = useRef();
    // const [upKeyState, setUpKeyState] = useState(false);
    // const [downKeyState, setDownKeyState] = useState(false);
    // useFrame(({ clock }) => {
    //     // Zoom in/out based on keyboard input
    //     // Define keyboard control

    // });

    return (
        <PerspectiveCamera
            ref={cameraRef}
            fov={75}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
            position={[0, 0, 5]} // Initial camera position
        />
    );
}

export default Camera;
