import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work on any host or sub-path (Netlify, Vercel, GitHub Pages, cPanel)
export default defineConfig({
  base: './',
  plugins: [react()],
})
