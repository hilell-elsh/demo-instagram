import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig(({mode}) => {

  return {
    build: {
        outDir: "../back-end/static"
    },
    plugins: [
      react(),
   ],
   test: {
     environment: 'happy-dom',
     global: true
   }
}
})