import React from 'react'
import './index.css'
import { IoIosArrowRoundUp } from 'react-icons/io'
import Equipe from '../../assets/membros.svg'

const QuemSomosSection = () => {
  return (
    <div className="quem-somos" id="quem-somos">
      <div className='Titulo-QuemSomos'>
        <h1>Quem Somos</h1>
      </div>
      <div className='Agrupar-SpansQm'>
        <div className='Texto-QuemSomos'>
          <p>Somos uma empresa criada em 07/02/2022, formada por <span className='text-color'>7 estudantes</span> do curso de Desenvolvimento de Sistemas na ETEC Cidade Tiradentes.</p>
          <br />
          <p> Escolhemos o nome WON para representar nossa empresa, visto que possui significados na lingua inglesa. O W significa woman, que significa <span className='text-color'>mulher</span>, e ON de <span className='text-color'>ligado</span>.</p>
        </div>
        <div className='Imagem-QuemSomos'>
          <img src={Equipe} className='Img-QmSomos' />
        </div>
      </div>
    </div>
  )
}

export default QuemSomosSection

