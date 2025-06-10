import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,       // génère les .js.map à la build
  },
  css: {
    devSourcemap: true,    // génère les .css.map en développement
  },
});