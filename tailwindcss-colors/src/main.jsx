import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './components/button.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
