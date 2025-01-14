import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import html from '@rollup/plugin-html';
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 4173,  // Use the PORT from Heroku, fallback to 4173 for local development
    host: '0.0.0.0',  // Ensure the app binds to all available network interfaces
  },
  root: './',
  plugins: [react()],
})
