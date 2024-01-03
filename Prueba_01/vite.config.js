// Importar la configuración de vite
import { defineConfig } from 'vite'
// Importar el plugin de react
import react from '@vitejs/plugin-react'
// Exportar la configuración con el plugin de react
export default defineConfig({
  plugins: [react()]
})
