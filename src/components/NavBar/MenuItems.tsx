import React, { ReactElement } from 'react'
import * as IoIcons from 'react-icons/io'

interface MenuItem {
  title: string,
  icon: ReactElement
}

export const ITEMS:Array<MenuItem> = [
  {
    title: 'Quem Somos',
    icon: <IoIcons.IoMdHome size={20}/>
  },
  {
    title: 'Quem Somos',
    icon: <IoIcons.IoIosBody size={20}/>
  },
  {
    title: 'Quem Somos',
    icon: <IoIcons.IoIosCart size={20}/>
  },
  {
    title: 'Quem Somos',
    icon: <IoIcons.IoIosFingerPrint size={20}/>
  }
]