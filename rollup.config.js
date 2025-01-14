import { defineConfig } from 'rollup';
import html from '@rollup/plugin-html';
import react from '@vitejs/plugin-react';

export default defineConfig({
  input: 'public/index.html', // Correct path to your index.html
  plugins: [
    html(),
    react(), // Handle React specific features if you're using Vite
  ],
  output: {
    dir: 'dist',
    format: 'esm', // Module format
    sourcemap: true, // Optionally enable sourcemaps
  },
});