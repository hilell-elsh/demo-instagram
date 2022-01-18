import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: "../back-end/static",
        target: "esnext"
    },
  plugins: [react()],
  server: {
    proxy: {
      "/api": 'http://localhost:44444'
    }
  }
})