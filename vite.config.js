import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  // --- AÑADE ESTA SECCIÓN ---
  assetsInclude: ['**/*.glb'],
  // ---------------------------

  resolve: {
    alias: {
      '~bootstrap': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'node_modules/bootstrap'),
    }
  }
})