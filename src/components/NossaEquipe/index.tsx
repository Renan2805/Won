import React from 'react'
import './index.css'
import { IoIosArrowRoundForward, IoIosArrowRoundBack  } from 'react-icons/io'
import { Carousel } from 'react-responsive-carousel'
import { FaGithub, FaLinkedinIn, FaGoogle, FaInstagram} from 'react-icons/fa'
import Team from '../../assets/teamAtualizado.svg'
import MEMBROS from './membros'

const NossaEquipe = () => {
  return (
    <div id='Principal-NossaEquipe'>
      <div className='Titulo-Equip'>
        <h2 className='texto'>Nossa Equipe</h2>
      </div>

      {/* Carrosel de Membros */}
      <Carousel 
        showStatus={false}
        infiniteLoop
        showIndicators={true}
        showArrows={true}
        transitionTime={2000}
        showThumbs={true}
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
      <span>
        <div className='div-foto-equipe'>
          <div className='foto-equipe'>
            <img src={foto} className="imagemWon"/>
          </div>
          <div className='redesSociais'>
            <a href={links[0]}><button className='button-rede'><FaInstagram size={30} className='iconsS'></FaInstagram></button></a>
            <a href={links[1]}><button className='button-rede'><FaGithub size={30} className='iconsS'></FaGithub></button></a>
            <a href={links[2]}><button className='button-rede' id='manoBrown'><FaLinkedinIn size={30} className='iconsS'></FaLinkedinIn></button></a>
          </div>
        </div>
      </span>
      <div className='detalhes'>
        <div className='funcao'>
          <button className='button'>{funcao}</button>
        </div>
        <div className='nome-detalhes'>
          <h2 className='nomes'>{nome}</h2>
          <br />
          <p>{descricao}</p>
        </div>
      </div>
    </div>
  )

}

export default NossaEquipe
