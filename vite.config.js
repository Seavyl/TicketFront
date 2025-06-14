import { defineConfig } from 'vite'
import react          from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Dès que l'on appelle /api/* dans le front,
      // Vite le redirige vers ton back sur le port 8000
      '/api': {
        target:       'http://localhost:8000',
        changeOrigin: true,
        secure:       false,
      },
    },
  },
})