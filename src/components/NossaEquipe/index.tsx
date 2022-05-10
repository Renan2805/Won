import React from 'react'
import './index.css'
import { IoIosArrowRoundForward, IoIosArrowRoundBack  } from 'react-icons/io'
import { Carousel } from 'react-responsive-carousel'
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa'
import Team from '../../assets/team.svg'
import MEMBROS from './membros'

const NossaEquipe = () => {
  return (
    <div id='Principal-NossaEquipe'>
      <div className='Principal-NossaEquipe' >
        <div className='Titulo-Equipe'>
          <p className='texto'>Nossa Equipe</p>
        </div>

        {/* Carrosel de Membros */}
        <Carousel 
          autoPlay
          showStatus={false}
          infiniteLoop
          showIndicators={false}
          showArrows={true}
          transitionTime={2000}
        >
          {
            MEMBROS.map((m:membro, index:number) => (
              <CarrousselItem
                nome={m.nome}
                funcao={m.funcao}
                descricao={m.descricao}
                foto={m.foto}
                links={m.links}
                key={index}
              />
            ))
          }  
        </Carousel>
        <img src={Team} alt="Ilustração 'Time'" className="team-illustration"/>
      </div>
    </div>
    
  )  
}

interface membro {
  nome: string,
  funcao: string,
  descricao: string,
  foto: string,
  links: Array<string>
}
const CarrousselItem = ({ nome, funcao, descricao, foto, links }:membro) => {

  return (
    <div className='Membros'>
      <span className='Fotos'>
        <img className='Foto-vitor' src={foto} />
      </span>
      <span className='Descricao'>
        <h3>{nome}</h3>
        <div className='Funcao-div'>
          <button className='Funcao'>{funcao}</button>
        </div>
        <div className='Descricao-Equipe'>
          <p className='Titulo-Equipe'>{descricao}</p>
        </div>
        <span className='Redes-Sociais'>
          <a className='RedeSocial' id='E-mail'   href={links[0]}><FaGoogle size={20}/></a>
          <a className='RedeSocial' id='Github'   href={links[1]}><FaGithub size={20}/></a>
          <a className='RedeSocial' id='Linkedin' href={links[2]}><FaLinkedin size={20}/></a>
        </span>
      </span>
    </div>
  )

}

export default NossaEquipe
