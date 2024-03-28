import dotenv from "dotenv";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  root: process.env.VITE_APP_SOURCE,
  plugins: [react()],
  base: process.env.VITE_APP_BASENAME,
  build: {
    sourcemap: true,
  },
});
