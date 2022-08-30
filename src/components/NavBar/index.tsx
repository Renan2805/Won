import React, { ReactElement, useState } from 'react'
import Hamburger from 'hamburger-react'
import './index.css'
import { ITEMS } from './MenuItems'

import Logo from '../../assets/logo.png'
import useWindowDimensions from '../../hooks/hooks'

interface MenuItem {
  title: string,
  to: string,
  icon: ReactElement,
  class?: string
}

const NavBar = () => {

  const window = useWindowDimensions()

  const [isOpen, setOpen] = useState(false)

  if (window.width < 700) return (
    <>
      <nav>
        <img 
          className="logo-img"
          src={Logo} 
          alt={'WonTI Logo'} 
        />
        <Hamburger 
          size={40}
          color={'black'}
          rounded
          toggled={isOpen} 
          toggle={setOpen}
        />

      </nav>
      <button
        className={`invisible-close-btn ${isOpen ? 'btn-active' : 'btn-unactive'}`} 
        type={'button'}
        title={'spooky'}
        onClick={() => setOpen(false)} 
      />
      <div className={isOpen ? 'active menu' : 'menu'}>
        {
          ITEMS.map((item:MenuItem, index) => {
            return (
              <a 
                key={index} 
                href={item.to} 
                onClick={() => setOpen(false)}
              >
                <span>{item.icon}</span>
                {' '}
                <p>{item.title}</p>
              </a>
            )
          })
        }
      </div>
      
    </>
  ) 
  else return (
    <nav>
      <img 
        className="logo-img"
        src={Logo} 
        alt={'WonTI Logo'} 
      />
      <ul className="nav-links">
        {
          ITEMS.map((item:MenuItem, index) => (
            <li key={index} className={item.class}>
              <a href={item.to}>{item.title}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}


export default NavBar