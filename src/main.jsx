import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App titulo='Hola Mundo' img='https://media.tenor.com/ApvFlyMJY3AAAAAe/shrek-diva.png' style='texto' h1='titulo'/>
    <br />
    <App titulo='Adios Mundo' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-ly5LASWD8SIrkVcZmLFATcLFwnS4Z-azA&s' style='texto'  h1='titulo1' />
    <br />
    <App titulo='Hola de nuevo mundo' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6sPRO-p1R2d1eKBn5PdXGR88zzy0aJ7mkA&s' style='texto'  h1='titulo2' />
  </StrictMode>,
)
