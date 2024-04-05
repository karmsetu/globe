import { useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Camera() {
    const cameraRef = useRef();
    // useFrame(() => {
    //     const keyDownEvent = window.addEventListener('keydown', () => {
    //         console.log(`doen`);
    //         cameraRef.current.position.z += 1;
    //     });
    //     const keyUpEvent = window.addEventListener('keyup', () => {
    //         console.log(`up`);
    //         cameraRef.current.position.z = 5;
    //     });
    //     return () => {
    //         removeEventListener('keydown', keyDownEvent),
    //             removeEventListener('keyup', keyUpEvent);
    //     };
    // });

    return (
        <PerspectiveCamera
            ref={cameraRef}
            fov={75}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
            position={[0, 0, 5]} // Initial camera position
            // onClick={console.log(`cry`)}
        />
    );
}

export default Camera;
