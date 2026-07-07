import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite' // 1. Import Tailwind

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // 2. Add Tailwind plugin (place it near the top)
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})
