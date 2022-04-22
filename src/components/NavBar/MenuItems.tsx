import React, { ReactElement } from 'react'
import * as IoIcons from 'react-icons/io'

interface MenuItem {
  title: string,
  to: string,
  icon: ReactElement
}

export const ITEMS:Array<MenuItem> = [
  {
    title: 'Quem Somos',
    to: '#land-section',
    icon: <IoIcons.IoMdHome size={19}/>
  },
  {
    title: 'Quem Somos',
    to: '#second-section',
    icon: <IoIcons.IoIosAdd size={19}/>
  },
  {
    title: 'Quem Somos',
    to: '#third-section',
    icon: <IoIcons.IoIosCart size={19}/>
  },
  {
    title: 'Quem Somos',
    to: '#fourth-section',
    icon: <IoIcons.IoIosFingerPrint size={19}/>
  }
]