import React from 'react'
import './index.css'

const Contato = () => {
  return (
    <div className='Principal-Contato' id='Principal-Contato'>
      <div className='Principal-Formulario'>
        <div className="Titulo-Contato">
          <h1>Contato</h1>
        </div>
        <form className='formulario'>
          <h4 className='Contato-Tipo'>Nome</h4>
          <input type="text" className='Nome' placeholder='Nome'/>
          <h4 className='Contato-Tipo'>E-mail</h4>
          <input type="email" className='Email' placeholder='Email'/>
          <br />
          <h4 className='Contato-Tipo'>Assunto</h4>
          <input type="text" className='Assunto' placeholder='Assunto'/>
          <br />
          <h4 className='Contato-Tipo'>Mensagem</h4>
          <textarea className='Text-Box' placeholder='Escreva aqui'></textarea>
          <button className='button-form'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contato