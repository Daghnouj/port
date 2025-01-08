import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/raouia/',
  build: {
    rollupOptions: {
      external: ['react-tilt', 'react-tilt-3d']
    }
  }
})


