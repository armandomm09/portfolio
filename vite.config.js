import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/portfolio",
  plugins: [react()],
  server: {
    host: '192.168.100.58',
    port: 3000
  }
})
