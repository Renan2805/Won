import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './index.css'
import vitor from '../../../src/assets/vitor.jpg'

const NossoProjeto = () => {
  return (
    <div className='Principal-NossoProjeto'>
      <div className='Titulo'>
        <h1>Nosso Projeto</h1>
      </div>
      <div className='Agrupar-Spans'>
        <Carousel 
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
        >
          <CardProjeto imagem={vitor} texto={'vai tomar no cu vai tomar no cu vai tomar no cu'}/>
          <CardProjeto imagem={vitor} texto={'vai tomar no cu vai tomar no cu vai tomar no cu'}/>
          <CardProjeto imagem={vitor} texto={'vai tomar no cu vai tomar no cu vai tomar no cu'}/>
        </Carousel>
      </div>
      <div className='div-Button'>
        <button className='Button'>
          <h4>Cadastre-se</h4>
        </button>
      </div>
    </div>
  )
}

interface propTypes {
  imagem: string,
  texto: string
}
const CardProjeto = ({ imagem, texto }:propTypes) => {
  return (
    <div className="card-projeto">
      <div className='div-foto'>
        <img className='Imagem' src={imagem} alt="" />
      </div>
      <p className="Texto">{texto}</p>
    </div>
  )
}

export default NossoProjeto