import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import LandingSection from './components/LandingSection'
import Second from './components/SecondSection'

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <LandingSection />
      <Second />
    </div>
  )
}

export default App
