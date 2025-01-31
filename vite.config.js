import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/R-Mock-2/vite-project",
  plugins: [react()],
})
