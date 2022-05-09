import React from 'react'
import './index.css'
import vitor from '../../../src/assets/vitor.jpg'

const NossoProjeto = () => {
  return (
    <div className='Principal-NossoProjeto'>
      <div className='Titulo'>
        <h1>Nosso Projeto</h1>
      </div>
      <div className='Agrupar-Spans'>
        <span className='Span-Funcao'>
          <div className='div-foto'>
            <img className='Imagem' src="" alt="" />
          </div>
          <div className='Texto-Funcao'>
            <p className='Texto'>Lorem ipsum dolor sit amet consect?</p>
          </div>
        </span>
        <span className='Span-Funcao'>
          <div className='div-foto'>
            <img className='Imagem' src="" alt="" />
          </div>
          <div className='Texto-Funcao'>
            <p className='Texto'>Lorem ipsumsit, amsap</p>
          </div>
        </span>
        <span className='Span-Funcao'>
          <div className='div-foto'>
            <img className='Imagem' src="" alt="" />
          </div>
          <div className='Texto-Funcao'>
            <p className='Texto'>Lorem ipsum dolor sit, amet c</p>
          </div>
        </span>
       
      </div>
      <div className='div-Button'>
        <button className='Button'>
          <h4>Cadastre-se</h4>
        </button>
      </div>
    </div>
  )
}

export default NossoProjeto