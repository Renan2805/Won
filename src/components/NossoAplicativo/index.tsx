import React from 'react'
import './index.css'
import Celulares from '../../assets/Celular_nossoAplicativo.png'

const NossoAplicativo = () => {
  return (
    <div className="Principal-NossoAplicativo" id='Principal-NossoAplicativo'>
      <span className='Span-NossoAplicativo'>
        <div className='Nosso-Aplicativo-texto'>
          <h3 id='Titulo-NossoProjeto'>Nosso Aplicativo</h3> 
          <h1>Tenha acesso a diversas vagas de emprego na área de T.I</h1> 
          <br />      
          <p>O aplicativo criado exclusivamente para as mulheres, que tanto sofrem preconceito no mercado de trabalho.</p>
          <span id='textos-span'>
            <div className='prg-span'><p className='txt-aplicativo'>Candidata baixe o aplicativo WonTI gratuitamente em todas as lojas de aplicações, realize seu cadastro e inscreva-se nas vagas que mais interessam a voce.</p></div>
            <div className='prg-span'><p className='txt-aplicativo'>Empresas podem obté-lo gratuitamente para que possam adicionar novas vagas e terem contato com as mais talentosas mulheres da tecnologia</p></div>
          </span>
          <a href="https://wonti-site.vercel.app/" id='link-chato'>
            <button id='button-obter'>Obter aplicativo</button>
          </a>
        </div>
        <div className='Imagens-Celular'>
          <div id="celulares"></div>
        </div>
      </span>
    </div>
  ) 
}
export default NossoAplicativo