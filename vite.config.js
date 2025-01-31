import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/Book store/vite-project/React-Mock",
  plugins: [react()],
})
