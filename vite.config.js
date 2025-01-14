import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'public/index.html' // Ensures Rollup knows where the entry HTML file is
    },
    outDir: 'dist', // This is where the production files will be output
  },
  publicDir: 'public',
})
