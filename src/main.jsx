// Importa StrictMode de React para ayudar a detectar posibles problemas durante el desarrollo
import { StrictMode } from 'react'
// Importa la función createRoot para inicializar la aplicación React (React 18+)
import { createRoot } from 'react-dom/client'
// Importa los estilos globales de la aplicación
import './index.css'
// Importa el componente principal de tu aplicación
import App from './App.jsx'
// Importa BrowserRouter para manejar la navegación con React Router
import { BrowserRouter } from 'react-router-dom'

// Punto de entrada de la aplicación: renderiza el componente App dentro del div con id="root"
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Ayuda a detectar errores y advertencias en modo desarrollo */}
    <BrowserRouter> {/* Habilita el uso de rutas en la app */}
      <App /> {/* Componente principal de la aplicación */}
    </BrowserRouter>
  </StrictMode>,
)
