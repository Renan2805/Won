import React from 'react'
import './index.css'
import { IoIosArrowRoundUp } from 'react-icons/io'
import Equipe from '../../assets/membros.svg'

const QuemSomosSection = () => {
  return (
    <div className="quem-somos" id="quem-somos">
      <div className='div-titulo'>
        <h1 className='titulo'>Quem Somos</h1>
      </div>
      <span className='div-text'>
        <p>
          Somos uma empresa criada em 07/02/2022, formada por <span className='text-color'>7 estudantes</span> do curso de Desenvolvimento de Sistemas na ETEC Cidade Tiradentes.
          <p>
            <br />
          Escolhemos o nome WON para representar nossa empresa, visto que possui significados na lingua inglesa. O W significa woman, que significa <span className='text-color'>mulher</span>, e ON de <span className='text-color'>ligado</span>.
          </p>
        </p>
      </span>
      <span className='div-image'>
        <img 
          src={Equipe} 
          className="imagem" 
          alt="Job Hunt illustration" 
        />
      </span>
    </div>
  )
}

export default QuemSomosSection