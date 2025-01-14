import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import html from '@rollup/plugin-html';
// https://vite.dev/config/
export default defineConfig({
  root: './',
  plugins: [react()],
})
