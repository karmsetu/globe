/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import earthImage from '../assets/images/earth-texture.jpg';
import { TextureLoader } from 'three';
import vertextShader from '../shaders/vertexShader.glsl';
import fragmentShader from '../shaders/fragmentShader.glsl';

const earthTexture = new TextureLoader().load(earthImage);
const Sphere = () => {
    const sphereRef = useRef();
    return (
        <mesh ref={sphereRef}>
            <sphereGeometry args={[1, 30, 30]} />
            <shaderMaterial
                vertexShader={vertextShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    globeTexture: {
                        value: earthTexture,
                    },
                }}
            />
        </mesh>
    );
};

export default Sphere;
