import React from 'react'
import './index.css'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'
import Logo from '../../assets/LogoWonti.png'
const NossoProjeto = () => {
  return (
    <div className='Principal-NossoProjeto' id='Principal-NossoProjeto'>
      <h1 className='Titulo'>Nosso projeto</h1>
      <span className='Agrupar-Spans'>
        <div className='divs-conteudos'>
          <div className='div-foto2'>
            <img src={Logo} alt="" className='foto-logo' id='logo-wonti' />
          </div>
          <div className='div-descricao' id='boraBill'>
            <h2 className='titulo-wonti'>NOME</h2>
            <br />
            <p className='paragrafo'>O nome é WonTI, junção de Woman e T.I. A ideia desse nome é a inclusão da mulher na área de T.I.</p>
          </div>
        </div>
        <div className='divs-conteudos'>
          <div className='div-foto2'>
            <img src={Card2} alt="" className='foto-logo'/>
          </div>
          <div className='div-descricao'>
            <h2 className='titulo-wonti'>OBJETIVO</h2>
            <br />
            <p className='paragrafo'>O objetivo do projeto é ajudar mulheres para encontrar vagas de T.I mo mercado de trabalho.</p>
          </div>
        </div>
        <div className='divs-conteudos'>
          <div className='div-foto2'>
            <img src={Card3} alt="" className='foto-logo' id='lupa'/>
          </div>
          <div className='div-descricao'>
            <h2 className='titulo-wonti'>+1   OBJETIVO</h2>
            <br />
            <p className='paragrafo'>Queremos auxiliar os RHs, que precisam de algum conhecimento na área para contratar.</p>
          </div>
        </div>
      </span>
    </div>
  )
}

export default NossoProjeto