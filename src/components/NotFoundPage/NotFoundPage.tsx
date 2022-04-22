import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'
import error404 from '../../assets/404.svg'
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <Link to='/'>
        <IoMdArrowBack size={40} color={'#6695ff'}/>
      </Link>
      <h1>Pagina não encontrada :(</h1>
      <img src={error404} alt="404" className="e404" />
    </div>
  )
}

export default NotFoundPage