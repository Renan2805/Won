import React from 'react'
import './index.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Video = () => {
  return (
    <div className='Principal-video'>
      <div className='div-video'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IXieHw7urEo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <div className='div-iconsVideo'>
        <button className='button-video'><FaInstagram size={45} color={'white'}></FaInstagram></button>
        <button className='button-video'><FaFacebook size={45} color={'white'}></FaFacebook></button>
        <button className='button-video'><FaYoutube size={45} color={'white'}></FaYoutube></button>
        <button className='button-video'><FaTwitter size={45} color={'white'}></FaTwitter></button>
      </div>
    </div>
  ) 
}
export default Video