import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/portfolio",
  plugins: [react()],
  server: {
    host: '172.17.7.203',
    port: 3000
  }
})
