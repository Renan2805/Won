import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import LandingSection from './components/LandingSection'
import QuemSomosSection from './components/QuemSomosSection'
import NossaEquipe from './components/NossaEquipe'
import NossoProjeto from './components/NossoProjeto'

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingSection />
      {/* <QuemSomosSection /> */}
      <NossaEquipe/>
      <NossoProjeto/>
    </div>
  )
}

export default App
