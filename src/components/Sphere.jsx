/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from 'react';
import earthImage from '../assets/images/earth-texture.jpg';
import { AdditiveBlending, BackSide, TextureLoader } from 'three';
import vertextShader from '../shaders/vertexShader.glsl';
import fragmentShader from '../shaders/fragmentShader.glsl';

import atmosphereVertextShader from '../shaders/atmosphereVertexShader.glsl';
import atmosphereFragmentShader from '../shaders/atmosphereFragmentShader.glsl';
// import { useFrame } from '@react-three/fiber';

const earthTexture = new TextureLoader().load(earthImage);
// eslint-disable-next-line react/prop-types
const Sphere = () => {
    const atmosphereRef = useRef();
    const sphereRef = useRef();
    useEffect(() => {
        const listener = window.addEventListener('mousemove', (e) => {
            atmosphereRef.current.rotation.x +=
                (e.clientX / innerWidth) * 2 - 1;
            atmosphereRef.current.rotation.y -=
                -(e.clientX / innerHeight) * 2 + 1;
        });

        return () => removeEventListener('mousemove', listener);
    }, []);

    return (
        <>
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
            <mesh ref={atmosphereRef}>
                {/* Atmostphere */}
                <sphereGeometry args={[1.2, 30, 30]} />
                <shaderMaterial
                    vertexShader={atmosphereVertextShader}
                    fragmentShader={atmosphereFragmentShader}
                    blending={AdditiveBlending}
                    side={BackSide}
                />
            </mesh>
        </>
    );
};

export default Sphere;
