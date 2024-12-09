import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './Pages/HomePage.jsx'
import ContextProvider from './Context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <HomePage />
    </ContextProvider>
  </StrictMode>,
)
