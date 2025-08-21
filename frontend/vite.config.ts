import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Vite uses 'middlewareMode' and 'spa fallback' automatically for index.html
    // No need for historyApiFallback, Vite handles SPA fallback by default
  }
});