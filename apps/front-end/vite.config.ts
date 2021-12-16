import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const isDevEnv = mode === 'development';

  return {
    build: {
        outDir: "../back-end/static"
    },
    plugins: [
      isDevEnv && react(),
   ]
}
})