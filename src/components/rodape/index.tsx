import React from 'react'
import './index.css'
import CelularCopy from '../../assets/Celular_Copyright_Nova.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const link = [
  'https://www.instagram.com/wonempresa/',
  'https://wonti-site.vercel.app/'
]

const Rodape = () => {
  return (
    <div className='Principal-Rodape'>
      <span className='Span-Rodape'>
        <div className='Descricao-Rodape'>
          <h4 id='titulo-app-rodape'>APP DA WONTI</h4>
          <h1 id='descricao-app-rodape'>Baixe o aplicativo da WonTI e tenha acesso a diversas vagas de emprego na área de T.I</h1>
          <a href={link[1]}>
            <button id='button-rodape'>FAZER DOWNLOAD</button>
          </a>
        </div>
        <div className='foto-rodape'>
          <img src={CelularCopy} className="foto-celular-rodape" alt="" />
        </div>
      </span>
      <div className='Direitos-Rodape'>
        <div className='Copy-rodape'>
          <p>©Won 2022. Todos os direitos reservados </p>
        </div>
        <div className='icons-Rodape'>
          <a href={link[0]}><button><FaInstagram size={30}/></button></a>
          <a href=''><button><FaYoutube size={30}/></button></a>
          <a href=''><button><FaFacebook size={30}/></button></a>
        </div>
      </div>
    </div>
  )
}
export default Rodape