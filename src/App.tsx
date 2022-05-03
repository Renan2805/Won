import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import LandingSection from './components/LandingSection'
import QuemSomosSection from './components/QuemSomosSection'

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingSection />
      <QuemSomosSection />
    </div>
  )
}

export default App
