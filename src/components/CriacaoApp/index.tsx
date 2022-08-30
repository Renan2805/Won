import React from  'react'
import './index.css'
import { Carousel } from 'react-responsive-carousel'
import cadastro2 from '../../assets/Celular_login.png'
import cadastro3 from '../../assets/Celular_vagas.png'
import cadastro from '../../assets/Celular_cadastrarCandidata.png'
const CriacaoApp = () => {
  return (
    <div className='Principal-criacaoApp'>
      <Carousel className="carrousel-criacao"
        autoPlay
        showStatus={false}
        infiniteLoop
        showIndicators={false}
        showArrows={false}
        transitionTime={1000}
        showThumbs={true}
      >
        <span className='Span-criacao'>
          <div className='Numberr'>
            <h1 id='nummber'>1</h1>
          </div>
          <div className='div-foto-criacao'>
            <img src={cadastro} alt="" className='img-class' />
          </div>
          <div className='text-criacao-app'>
            <div className='titulo-descricao-app'>
              <h1 id='titulo-app-criacao'>CRIE SUA CONTA EM NOSSO APP</h1>
            </div>
            <div className='titulo-descricao-app'>
              <p id="descricao-criacaoApp">Após obter nosso aplicativo, realize seu cadastro.</p>
            </div>
          </div>
        </span>
        <span className='Span-criacao'>
          <div className='Numberr'>
            <h1 id='nummber'>2</h1>
          </div>
          <div className='div-foto-criacao'>
            <img src={cadastro2} alt="" className='img-class' />
          </div>
          <div className='text-criacao-app'>
            <div className='titulo-descricao-app'>
              <h1 id='titulo-app-criacao'>ENTRE EM SUA CONTA</h1>
            </div>
            <div className='titulo-descricao-app'>
              <p id="descricao-criacaoApp">Depois de criar sua conta, faça login em nosso aplicativo.</p>
            </div>
          </div>
        </span>
        <span className='Span-criacao'>
          <div className='Numberr'>
            <h1 id='nummber'>3</h1>
          </div>
          <div className='div-foto-criacao'>
            <img src={cadastro3} alt="" className='img-class'/>
          </div>
          <div className='text-criacao-app'>
            <div className='titulo-descricao-app'>
              <h1 id='titulo-app-criacao'>ACESSE AS VAGAS</h1>
            </div>
            <div className='titulo-descricao-app'>
              <p id="descricao-criacaoApp">Após fazer login em sua conta, voce já pode ter acesso ás vagas.</p>
            </div>
          </div>
        </span>
      </Carousel>
    </div>
  )
}
export default CriacaoApp 