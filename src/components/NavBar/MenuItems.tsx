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
    to: '#Principal-NossaEquipe',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Quem Somos',
    to: '#quem-somos',
    icon: <IoIcons.IoMdConstruct />
  },
  {
    title: 'CONTATO',
    to: '#fourth-section',
    icon: <IoIcons.IoMdAt />,
    class: 'contact'
  },
]