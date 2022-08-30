import React from 'react'
import './index.css'
import { FaTrophy, FaDollarSign,FaPhabricator } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'

const SobreNos = () => {
  return (
    <div className='div-SobreNos'>
      <h1 id="">Sobre Nós</h1>
      <span className='Span-SobreNos'>
        <div className='spans-SobreNos-conteudo'>
          <FaTrophy size={60} color="blue" className='icon-SobreNos'></FaTrophy>
          <h1 id='missao'>MISSÃO</h1>
          <br />
          <p>Revolucionar o mercado de TI, incluindo mulheres nos lugares onde são grande menoria, e ajuda-las a encontrar o hambiente de trabalho que ela quiser.</p>
        </div>
        <div className='spans-SobreNos-conteudo'>
          <FaPhabricator size={60} color="purple" className='icon-SobreNos'>VISÃO</FaPhabricator>
          <h1 id='visao'>VISÃO</h1>
          <br />
          <p id='prg'>Ser reconhecida como a empresa que revolucionou o mercade de TI para mulheres, aumentando ainda mais o numeros de empregos gerados área de Técnologia.</p>
        </div>
        <div className='spans-SobreNos-conteudo'>
          <FaDollarSign size={60} color="magenta" className='icon-SobreNos'>VALORES</FaDollarSign>
          <h1 id='valor'>VALORES</h1>
          <br />
          <p>Prezamos pela inclusão, respeito e responsabilidade. Sem inclusão não há respeito, e sem respeito não há responsabilidades;</p>
        </div>
      </span>
    </div>
  ) 
}
export default SobreNos
