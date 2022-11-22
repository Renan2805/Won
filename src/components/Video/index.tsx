import React from 'react'
import './index.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Video = () => {

  const links = [
    'https://www.instagram.com/wonempresa/',
    '',
    'https://www.youtube.com/watch?v=IXieHw7urEo&feature=emb_imp_woyt&ab_channel=VitorHugo',
    ''
  ]

  return (
    <div className='Principal-video'>
      <div className='div-video'>
        <iframe src="https://www.youtube.com/embed/Mt8vmH8oIxI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='div-iconsVideo'>
        <a href={links[0]}><button className='button-video'><FaInstagram size={45} color={'white'}></FaInstagram></button></a>
        <button className='button-video'><FaFacebook size={45} color={'white'}></FaFacebook></button>
        <a href={links[2]}><button className='button-video'><FaYoutube size={45} color={'white'}></FaYoutube></button></a>
        <button className='button-video'><FaTwitter size={45} color={'white'}></FaTwitter></button>
      </div>
    </div>
  ) 
}
export default Video