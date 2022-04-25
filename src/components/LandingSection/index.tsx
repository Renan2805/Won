import React from 'react'
import Coding from '../../assets/coding.svg'
import './index.css'

const LandingSection = () => {

  return (
    <div className="land-section">
      <p className="land-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi culpa.
      </p>
      <img 
        src={Coding} 
        className="land-illustration" 
        alt="Job Hunt illustration" 
      />
      <a href="#/join">Saiba Mais</a>
    </div>
  )
}

export default LandingSection