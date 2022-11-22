import React, { useState } from 'react'
import './index.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const sendEmail = (e) => {
    e.preventDefault()

    if(email == '' || nome == '' || assunto == '' || mensagem == '') {
      alert('Insira todos os valores no campo')
      return
    }
    const templateParams = {
      nome: nome,
      mensagem: mensagem,
      email: email,
      assunto: assunto
    }
    emailjs.send('service_bxjr7qi', 'template_8w4uvv9', templateParams, 'YiXuGUGYUndhvX5q0')

      .then(()=> {
        setNome('')
        setEmail('')
        setAssunto('')
        setMensagem('')
      },
      (error)=> {
        console.log(error)
      }
      )
  }
  return (
    <div className='Principal-Contato' id='Principal-Contato'>
      <div className='Principal-Formulario'>
        <div className="Titulo-Contato">
          <h1>Contato</h1>
        </div>
        <form className='formulario' onSubmit={sendEmail}>
          <h4 className='Contato-Tipo'>Nome</h4>
          <input type="text" className='Nome' placeholder='Nome' onChange={(e)=>setNome(e.target.value)} value={nome}/>
          <h4 className='Contato-Tipo'>E-mail</h4>
          <input type="email" className='Email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <br />
          <h4 className='Contato-Tipo'>Assunto</h4>
          <input type="text" className='Assunto' placeholder='Assunto' onChange={(e)=>setAssunto(e.target.value)} value={assunto}/>
          <br />
          <h4 className='Contato-Tipo'>Mensagem</h4>
          <textarea className='Text-Box' placeholder='Escreva aqui' onChange={(e)=>setMensagem(e.target.value)} value={mensagem}></textarea>
          <button className='button-form'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contato