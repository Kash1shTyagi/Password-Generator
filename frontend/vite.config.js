import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
    server: {
    proxy: {
      // any request to /api → http://localhost:5000/api
      '/api': 'https://password-generator-89be.onrender.com'
    }
  }
})
