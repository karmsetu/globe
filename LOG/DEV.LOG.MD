## Orbit controls & stats with @react-three/drei

```bash
npm i @react-three/drei

```

```jsx
import { Stats, OrbitControls } from '@react-three/drei';

export default function App() {
    return (
        <Canvas camera={{ position: [0, 0, 3] }}>
            <OrbitControls />
            <Stats />
        </Canvas>
    );
}
```

-   [src](https://sbcode.net/react-three-fiber/orbit-controls/)

## renderer control with r3f

-   [src](https://gracious-keller-98ef35.netlify.app/docs/api/canvas/)

```jsx
<Canvas className="bg-slate-900" ref={sceneRef} gl={{ antialias: true }}>
    <directionalLight position={[1, 2, 3]} />
    <Sphere />
    <OrbitControls enableDamping={true} autoRotate={true} />
    <Stats />
</Canvas>
```
