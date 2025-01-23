/// <reference types="vitest/config" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base path for deployment (comment for development)
  // base: '/~miikavs/hybrid-react-build/',
  // base path for development (comment for deployment)
  base: '',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest-setup.js',
  },
});
