import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/luck-be-a-landlord-editor/",
  build: {
    sourcemap: true,
  }
})
