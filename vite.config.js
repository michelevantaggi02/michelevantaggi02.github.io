import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set base path to '/' for GitHub Pages Root User Repository (michelevantaggi02.github.io)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
