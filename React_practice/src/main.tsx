import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//import Card from './Card.tsx'
//import Cube from './Cube.tsx'
//import Database from './database.tsx'
//import Clock from "./Clock.tsx";
//import Home from "./Home.tsx";
//import WelcomeSection from "./Screen/WelcomeSection.tsx";
//import ScheduleSection from "./Screen/ScheduleSection.tsx";
//import WelcomeSection from './Screen/WelcomeSection.tsx';
//import EventModalSection from './Screen/EventModalSection.tsx';
//import Home from './Screen/Home.tsx';
//import Weather from './Weather_Application.tsx';
import App from './GithubProfileView/App.tsx';
//import App from './GithubProfileView/Homepage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Cube /> */}
    {/* <Home /> */}
    {/* <Database /> */}
    {/* <Card /> */}
    {/* <Clock /> */}
    {/* <WelcomeSection /> */}
    {/* <ScheduleSection /> */}
    {/* <EventModalSection /> */}
    {/* <Weather /> */}
    {/* <Home /> */}
     <App />
     {/*<Homepage />*/}

  </StrictMode>,
)
