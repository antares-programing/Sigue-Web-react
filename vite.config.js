// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Esto te permite usar '@/' para referirte a la carpeta 'src'
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  // Esta línea es CRUCIAL para que la importación del .glb funcione
  assetsInclude: ['**/*.glb'],
})