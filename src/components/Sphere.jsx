/* eslint-disable react/no-unknown-property */
// import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import earthImage from '../assets/images/earth-texture.jpg';
import { TextureLoader } from 'three';
// import { SphereGeometry } from 'three';

const earthTexture = new TextureLoader().load(earthImage);
// const sphere = new SphereGeometry(1);
const Sphere = () => {
    const sphereRef = useRef();
    // useFrame((state, delta) => {
    //     sphereRef.current.rotation.x += delta;
    //     sphereRef.current.rotation.y += delta;
    // });
    return (
        <mesh ref={sphereRef}>
            <sphereGeometry args={[1, 30, 30]} />
            <meshStandardMaterial
                // color={0xffffff}
                wireframe={false}
                map={earthTexture}
            />
        </mesh>
    );
};

export default Sphere;
