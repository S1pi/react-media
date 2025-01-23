import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base path for deployment (comment for development)
  base: '/~miikavs/hybris-react-build/',
  // base path for development (comment for deployment)
  // base: ''
});
