import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [react(), tailwindcss(), viteCompression()],
  base: '/Ace-Developer/', // ✅ For Netlify: Use relative path
})
