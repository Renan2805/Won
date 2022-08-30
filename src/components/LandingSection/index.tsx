import React from 'react'
import Coding from '../../assets/escada.svg'
import './index.css'
import Pixelado from '../../assets/fundoPixelado.png'

const LandingSection = () => {

  return (
    <div className="land-section" id="land-section">
      <div className="">
        <p className="land-text">
          <span><p className='text-one'>Visando a inclusão de mulheres no mercado de T.I</p></span>
          <br />
          <p className='second-text'>
            <p className='text-two'>Nosso objetivo é ajudar as mulheres que buscam empregos na área de T.I. Em busca de igualdade entre os generos </p>
          </p>
          <a href="#Principal-NossoProjeto">
            <button className='button-projeto'>Nosso projeto</button>
          </a>
        </p>
        <img 
          src={Coding} 
          className="land-illustration" 
          alt="Job Hunt illustration" 
        />
      </div>
    </div>
  )
}

export default LandingSection