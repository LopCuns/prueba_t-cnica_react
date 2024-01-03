import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './src/App'
// Root de la aplicación
const app = document.getElementById('app')
// Renderizar el contenido
createRoot(app).render(
  <StrictMode>
    <App />
  </StrictMode>
)
