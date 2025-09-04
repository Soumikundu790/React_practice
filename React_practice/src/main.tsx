import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Card from './Card.tsx'
//import Cube from './Cube.tsx'
//import Database from './database.tsx'
//import Time from "./Time.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Cube /> */}
    {/* <Database /> */}
    <Card />
    {/* <Time /> */}

  </StrictMode>,
)
