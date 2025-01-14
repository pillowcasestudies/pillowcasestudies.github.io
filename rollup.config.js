import html from '@rollup/plugin-html';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'public/index.html', // Specify the input HTML file
  plugins: [
    html({
      template: 'public/index.html', // Ensure this points to the correct path
    }),
  ],
  output: {
    dir: 'dist', // Specify the output directory for the build
    format: 'esm', // Specify the module format
  },
});