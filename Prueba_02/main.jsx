import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './src/App'
import './public/water.css'

const app = document.getElementById('app')

createRoot(app).render(
  <StrictMode>
    <App />
  </StrictMode>
)
