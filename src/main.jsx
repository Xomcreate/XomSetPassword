import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Chi from './chi'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Chi/>
  </StrictMode>,
)
