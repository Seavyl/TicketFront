// vite.config.js
import { defineConfig } from 'vite'
import react          from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // si tu appelles '/api/...' dans le front, Vite
      // redirige vers ton Symfony sur le port 8000
      '/api': {
        target:    'http://localhost/TicketShop/public',
        changeOrigin: true,
        secure:    false,
      },
    },
  },
})