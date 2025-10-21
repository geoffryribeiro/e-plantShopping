import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Adicione a linha base com o nome do seu repositório
  base: "/e-plantShopping/", 
  plugins: [react()],
})