import React, { ReactElement } from 'react'
import * as IoIcons from 'react-icons/io'

interface MenuItem {
  title: string,
  to: string,
  icon: ReactElement,
  class?: string
}

export const ITEMS:Array<MenuItem> = [
  {
    title: 'INICIO',
    to: '#land-section',
    icon: <IoIcons.IoMdHome />,
  },
  {
    title: 'NOSSA EQUIPE',
    to: '#second-section',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'NOSSO PROJETO',
    to: '#third-section',
    icon: <IoIcons.IoMdConstruct />
  },
  {
    title: 'CONTATO',
    to: '#fourth-section',
    icon: <IoIcons.IoMdAt />,
    class: 'contact'
  }
]