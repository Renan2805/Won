import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './index.css'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'
import Logo from '../../assets/LogoWonti.png'
const NossoProjeto = () => {
  return (
    <div className='Principal-NossoProjeto' id='Principal-NossoProjeto'>
      <div className='Titulo'>
        <h1>Nosso Projeto</h1>
      </div>
      <div className='Agrupar-Spans'>
        <Carousel 
          autoPlay
          infiniteLoop
          interval={4000}
          showStatus={false}
        >
          <CardProjeto imagem={Logo}  texto={'O nome é WonTI, junção de Woman e T.I, a ideia desse nome é inclusão da mulher na área de Tecnologia'}/>
          <CardProjeto imagem={Card2} texto={'O objetivo do projeto é ajudar mulheres para encontrar vagas de T.I no mercado de trabalho'}/>
          <CardProjeto imagem={Card3} texto={'+1 Queremos auxiliar os RHs, que precisam de algum conhecimento área para contratar'}/>
        </Carousel>
      </div>
      <div className='div-Button'>
        <button className='Button'>
          <h4>Saiba mais</h4>
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