import React from 'react'
import './index.css'
import vitor from '../../assets/vitor.jpg'
import eliane from '../../assets/eliane.jpg'
import stephany from '../../assets/stephany.jpg'
import renan from '../../assets/renan.jpg'
import valim from '../../assets/valim.jpg'
import raquel from '../../assets/vitor.jpg'
import { IoIosArrowRoundForward, IoIosArrowRoundBack  } from 'react-icons/io'
import { Carousel } from 'react-responsive-carousel'
import ReactDOM from 'react'


const NossaEquipe = () => {
  return (
    <div className='Principal-NossaEquipe' id='Principal-NossaEquipe'>
      <div className='Titulo-Equipe'>
        <p className='texto'>Nossa Equipe</p>
      </div>

      {/* Carrosel de Membros */}

      <Carousel 
        autoPlay
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        showArrows={true}
        transitionTime={2000}>
        <div className='Membros'>
          <span className='Fotos'>
            <img className='Foto-vitor' src={vitor} />
          </span>
          <span className='Descricao'>
            <h3>Vitor Hugo de Oliveira Lima</h3>
            <div className='Funcao-div'>
              <button className='Funcao'>Desenvolvedor</button>
            </div>
            <div className='Descricao-Equipe'>
              <p className='Titulo-Equipe'>Lorem elit. Delectus, esse doloremque. Ipsum at perspiciatis saepe numquam eius nostrum voluptas dicta ab iure, possimus maxime dignissimos error sunt mollitia esse amet.</p>
            </div>
            <span className='Redes-Sociais'>
              <button className='RedeSocial' id='E-mail'>Email</button>
              <button className='RedeSocial' id='Github'>Github</button>
              <button className='RedeSocial' id='Linkedin'>Linkedin</button>
            </span>
          </span>
        </div>
        <div className='Membros'>
          <span className='Fotos'>
            <img className='Foto-vitor' src={stephany} />
          </span>
          <span className='Descricao'>
            <h3>Stephany Julia de Oliveira Justino</h3>
            <div className='Funcao-div'>
              <button className='Funcao'>Gerente</button>
            </div>
            <div className='Descricao-Equipe'>
              <p className='Titulo-Equipe'>Lorem elit. Delectus, esse doloremque. Ipsum at perspiciatis saepe numquam eius nostrum voluptas dicta ab iure, possimus maxime dignissimos error sunt mollitia esse amet.</p>
            </div>
            <span className='Redes-Sociais'>
              <button className='RedeSocial' id='E-mail'>Email</button>
              <button className='RedeSocial' id='Github'>Github</button>
              <button className='RedeSocial' id='Linkedin'>Linkedin</button>
            </span>
          </span>
        </div>
        <div className='Membros'>
          <span className='Fotos'>
            <img className='Foto-vitor' src={eliane} />
          </span>
          <span className='Descricao'>
            <h3>Eliane dos Reis Cabral da Rocha</h3>
            <div className='Funcao-div'>
              <button className='Funcao'>Desenvolvedora</button>
            </div>
            <div className='Descricao-Equipe'>
              <p className='Titulo-Equipe'>Lorem elit. Delectus, esse doloremque. Ipsum at perspiciatis saepe numquam eius nostrum voluptas dicta ab iure, possimus maxime dignissimos error sunt mollitia esse amet.</p>
            </div>
            <span className='Redes-Sociais'>
              <button className='RedeSocial' id='E-mail'>Email</button>
              <button className='RedeSocial' id='Github'>Github</button>
              <button className='RedeSocial' id='Linkedin'>Linkedin</button>
            </span>
          </span>
        </div>
        <div className='Membros'>
          <span className='Fotos'>
            <img className='Foto-vitor' src={renan} />
          </span>
          <span className='Descricao'>
            <h3>Renan Silva dos Anjos</h3>
            <div className='Funcao-div'>
              <button className='Funcao'>Desenvolvedor</button>
            </div>
            <div className='Descricao-Equipe'>
              <p className='Titulo-Equipe'>Lorem elit. Delectus, esse doloremque. Ipsum at perspiciatis saepe numquam eius nostrum voluptas dicta ab iure, possimus maxime dignissimos error sunt mollitia esse amet.</p>
            </div>
            <span className='Redes-Sociais'>
              <button className='RedeSocial' id='E-mail'>Email</button>
              <button className='RedeSocial' id='Github'>Github</button>
              <button className='RedeSocial' id='Linkedin'>Linkedin</button>
            </span>
          </span>
        </div>
        <div className='Membros'>
          <span className='Fotos'>
            <img className='Foto-vitor' src={valim} />
          </span>
          <span className='Descricao'>
            <h3>Lucas Valim Souza</h3>
            <div className='Funcao-div'>
              <button className='Funcao'>Design</button>
            </div>
            <div className='Descricao-Equipe'>
              <p className='Titulo-Equipe'>Lorem elit. Delectus, esse doloremque. Ipsum at perspiciatis saepe numquam eius nostrum voluptas dicta ab iure, possimus maxime dignissimos error sunt mollitia esse amet.</p>
            </div>
            <span className='Redes-Sociais'>
              <button className='RedeSocial' id='E-mail'>Email</button>
              <button className='RedeSocial' id='Github'>Github</button>
              <button className='RedeSocial' id='Linkedin'>Linkedin</button>
            </span>
          </span>
        </div>
        <div className='Membros'>
          <span className='Fotos'>
            <img className='Foto-vitor' />
          </span>
          <span className='Descricao'>
            <h3>Beatriz Santos de Lima</h3>
            <div className='Funcao-div'>
              <button className='Funcao'>Documentação</button>
            </div>
            <div className='Descricao-Equipe'>
              <p className='Titulo-Equipe'>Lorem elit. Delectus, esse doloremque. Ipsum at perspiciatis saepe numquam eius nostrum voluptas dicta ab iure, possimus maxime dignissimos error sunt mollitia esse amet.</p>
            </div>
            <span className='Redes-Sociais'>
              <button className='RedeSocial' id='E-mail'>Email</button>
              <button className='RedeSocial' id='Github'>Github</button>
              <button className='RedeSocial' id='Linkedin'>Linkedin</button>
            </span>
          </span>
        </div>
        <div className='Membros'>
          <span className='Fotos'>
            <img className='Foto-vitor' />
          </span>
          <span className='Descricao'>
            <h3>Gabriel</h3>
            <div className='Funcao-div'>
              <button className='Funcao'>Documentação</button>
            </div>
            <div className='Descricao-Equipe'>
              <p className='Titulo-Equipe'>Lorem elit. Delectus, esse doloremque. Ipsum at perspiciatis saepe numquam eius nostrum voluptas dicta ab iure, possimus maxime dignissimos error sunt mollitia esse amet.</p>
            </div>
            <span className='Redes-Sociais'>
              <button className='RedeSocial' id='E-mail'>Email</button>
              <button className='RedeSocial' id='Github'>Github</button>
              <button className='RedeSocial' id='Linkedin'>Linkedin</button>
            </span>
          </span>
        </div>
        <div className='Membros'>
          <span className='Fotos'>
            <img className='Foto-vitor' src={raquel} />
          </span>
          <span className='Descricao'>
            <h3>Raquel</h3>
            <div className='Funcao-div'>
              <button className='Funcao'>Design</button>
            </div>
            <div className='Descricao-Equipe'>
              <p className='Titulo-Equipe'>Lorem elit. Delectus, esse doloremque. Ipsum at perspiciatis saepe numquam eius nostrum voluptas dicta ab iure, possimus maxime dignissimos error sunt mollitia esse amet.</p>
            </div>
            <span className='Redes-Sociais'>
              <button className='RedeSocial' id='E-mail'>Email</button>
              <button className='RedeSocial' id='Github'>Github</button>
              <button className='RedeSocial' id='Linkedin'>Linkedin</button>
            </span>
          </span>
        </div>
      </Carousel>
      <div className='Setas'>
        <span id='SetaVoltar'>
          <button className='Botoes'>
            <IoIosArrowRoundBack size={40} color={'#407bff'} ></IoIosArrowRoundBack>
          </button>
        </span>
        <span id='SetaIr'>
          <button className='Botoes'>
            <IoIosArrowRoundForward size={40} color={'#407bff'} ></IoIosArrowRoundForward>
          </button>
        </span>
      </div>
    </div>
    
  )  
}

export default NossaEquipe