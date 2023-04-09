import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true
  },
  envPrefix: "REACT_",
  resolve: {
    alias: [
      {
        find: '@lxb',
        replacement: path.resolve(__dirname, 'src') 
      }
    ]
  }
})