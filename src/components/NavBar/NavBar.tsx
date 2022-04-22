import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import './NavBar.css'
import useWindowDimensions from '../../utils/functions'
import { ITEMS } from './MenuItems'

const NavBar = () => {

  const window = useWindowDimensions()

  const [isOpen, setOpen] = useState(false)

  if(window.width <= 560) {
    return (
      <>
        <nav>
          <div className="spacer"></div>
          <h1 className="title">WonTI</h1>
          <Hamburger 
            size={30}
            color={isOpen ? 'white':'black'}
            rounded
            toggled={isOpen} 
            toggle={setOpen}
            onToggle={() => console.log(window)
            }
          />

        </nav>
        <button className={`invisible-close-btn ${isOpen ? 'btn-active' : 'btn-unactive'}`} onClick={() => setOpen(false)}></button>
        <div className={isOpen ? 'active menu' : 'menu'}>
          {
            ITEMS.map((item, index) => {
              return (
                <a key={index}>{item.icon}{item.title}</a>
              )
            })
          }
        </div>
      
      </>
    )
  }else return (
    <nav>
      <h1 className="title">WonTI</h1>
    </nav>
  )
  
}

export default NavBar