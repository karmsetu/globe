import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), glsl()],
});

// // vite.config.js
// import { defineConfig } from 'vite';

// export default defineConfig({
//   plugins: [glsl()]
// });
