// Importar la definición de configuración
import { defineConfig } from 'vite'
// Importar el plugin de react
import react from '@vitejs/plugin-react'
// Definir la configuración con el plugin
export default defineConfig({
  plugins: [react()]
})
