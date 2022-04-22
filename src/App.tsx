import React from 'react'
import Hiring from './assets/hiring.svg'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="land-section">
        <p className="land-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi culpa.
        </p>
        <img src={Hiring} className="land-illustration" alt="Job Hunt illustration" />
        <a href="#/join">Saiba Mais</a>
      </div>
      <div className="land-section" id="second-section">
        <p className="land-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi culpa.
        </p>
        <img src={Hiring} className="land-illustration" alt="Job Hunt illustration" />
        <a href="#/join">Saiba Mais</a>
      </div>
    </div>
  )
}

export default App
