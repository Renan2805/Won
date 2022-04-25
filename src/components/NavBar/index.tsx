import React, { ReactElement, useState } from 'react'
import Hamburger from 'hamburger-react'
import './index.css'
// import useWindowDimensions from '../../hooks/hooks'
import { ITEMS } from './MenuItems'

import Logo from '../../assets/logo.png'

interface MenuItem {
  title: string,
  to: string,
  icon: ReactElement
}

const NavBar = () => {

  // const window = useWindowDimensions()

  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <nav>
        {/* <div className="spacer"></div> */}
      
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
}


export default NavBar