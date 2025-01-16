import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], 
  build: {
    assetsDir: 'Turf', // Set the assets directory to include your prefix
  },
})
