import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: "../back-end/static"
    },
  plugins: [react()],
  server: {
    proxy: {
      "/api": 'https://kilogram2022.herokuapp.com:4000'
    }
  }
})