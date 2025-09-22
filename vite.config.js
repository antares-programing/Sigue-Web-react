import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No necesitas 'path' ni 'fileURLToPath' si no usas alias

export default defineConfig({
  plugins: [react()],

  // Esto es correcto y debe quedarse
  assetsInclude: ['**/*.glb'], 
})