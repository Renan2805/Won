import React, { useState } from 'react'
import { IoMdArrowBack, IoMdEye, IoLogoFacebook, IoLogoGoogle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './index.css'

function TelaLogin() {

  const [Mostrar, setMostrar] = useState('password')
  const MostrarSenha = () => {
    if (Mostrar === 'password') {
      setMostrar('text')
    } else {
      setMostrar('password')
    }
  }

  return (
    <div className="Principal">
      <Link to={'/'}>
        <IoMdArrowBack size={40} color={'#6695ff'} />
      </Link>
      <div className='BlocoUm'>
        <form className='Formulario'>
          <h1>Login</h1>
          <input type="number" className='inputs' id='cpf' placeholder='CPF' />
          <input type={Mostrar} className='inputs' placeholder='Senha' /><button onClick={MostrarSenha} type='button' className='olho'> <IoMdEye size={20} color={'black'} /></button>
          <br />
          <h4 className='FacaLogin'>Ou faça login com: </h4>
          <br />
          <button className='LoginExterno'> <IoLogoFacebook size={40} color={'black'} /></button>
          <button className='LoginExterno'><IoLogoGoogle size={40} color={'black'} /></button>
          <br />
          <a href='/'><button type='button' className='Botao'>Entrar</button></a>
          <br />
          <a className='Link' href="/"> <span>Não tem conta?</span> Cadastre-se já</a>
        </form>
      </div>
    </div>
  )
}


export default TelaLogin