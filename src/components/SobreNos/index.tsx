import React from 'react'
import './index.css'
import { FaTrophy, FaDollarSign,FaPhabricator } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'

const SobreNos = () => {
  return (
    <div className='div-SobreNos'>
      <div className='divtitulo-SobreNos'>
        <h1>Sobre nós</h1>
      </div>
      <div className='Span-conteudo'>
        <div className='span1'>
          <div className='icon-sobrenos'>
            <FaTrophy size={60} color='blue' className='iconSobre'/>
          </div>
          <div className='titulo-icon'>
            <h1 id='obje'>OBJETIVO</h1>
          </div>
          <div className='descricao-icon'>
            <p>Revolucionar o mercado de TI, incluindo mulheres nos lugares onde são grande menoria, e ajuda-las a encontrar o hambiente de trabalho que ela quiser.</p>
          </div>
        </div>
        <div className='span1'>
          <div className='icon-sobrenos' id='diferencial'>
            <FaPhabricator size={60} color='purple' className='iconSobre'/>
          </div>
          <div className='titulo-icon'>
            <h1 id='visao'>VISÃO</h1>
          </div>
          <div className='descricao-icon'>
            <p>Ser reconhecida como a empresa que revolucionou o mercade de TI para mulheres, aumentando ainda mais o numeros de empregos gerados área de Técnologia.</p>
          </div>
        </div>
        <div className='span1'>
          <div className='icon-sobrenos'>
            <FaDollarSign size={60} color='magenta' className='iconSobre'/>
          </div>
          <div className='titulo-icon'>
            <h1 id='valor'>VALORES</h1>
          </div>
          <div className='descricao-icon'>
            <p>Prezamos pela inclusão, respeito e responsabilidade. Sem inclusão não há respeito, e sem respeito não há responsabilidades;</p>
          </div>
        </div>
      </div>
    </div>
  ) 
}
export default SobreNos
