import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import './NavBar.css'
import useWindowDimensions from '../../hooks/hooks'
import { ITEMS } from './MenuItems'

const NavBar = () => {

  const window = useWindowDimensions()

  const [isOpen, setOpen] = useState(false)

  console.log(ITEMS[0])

  if(window.width <= 700) {
    return (
      <>
        <nav>
          {/* <div className="spacer"></div> */}
          <div className={isOpen ? 'ham1 act':'ham1'}>
            <Hamburger
              size={30}
              color={isOpen ? 'black':'white'}
              rounded
              toggled={isOpen} 
              toggle={setOpen}
              onToggle={() => console.log(window)
              }
            />
          </div>
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
                <a 
                  key={index} 
                  href={item.to} 
                  onClick={() => setOpen(false)}
                >
                  {item.icon}{item.title}
                </a>
              )
            })
          }
        </div>
      
      </>
    )
  }else return (
    <nav>
      <p>{ITEMS[0].title}</p>
      <p>{ITEMS[1].title}</p>
      <h1 className="title">WonTI</h1>
      <p>{ITEMS[2].title}</p>
      <p>{ITEMS[3].title}</p>
    </nav>
  )
  
}

export default NavBar