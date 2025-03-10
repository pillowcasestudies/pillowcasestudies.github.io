import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "./", // Ensures relative paths for assets
  build: {
    outDir: "build", // Directory where the built files will go
  },
  server: {
    port: 3000, // Default development server port
    strictPort: true, // Ensures the port is used (Heroku assigns a random one)
  },
  plugins: [react()],
})


