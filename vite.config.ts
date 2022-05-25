import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [dynamicImportVars({})]
    }
  }
})
