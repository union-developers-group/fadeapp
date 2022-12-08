import Link from 'next/link'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Menu } from '@headlessui/react'

import { navBarLiStyle } from './../styles'

export interface MenuProps {
  route: string
  name: string
}

export const DesktopMenuTemplate = ({ route, name }: MenuProps) => {
  const [styles, setStyles] = useState('text-white')

  const handleScroll = () => {
    window.scrollY < 500 ? setStyles('text-white') : setStyles('')
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <li className={navBarLiStyle} key={`${name}desktop`}>
      <Link href={route}>
        <a
          className={styles}
        >
          {name}
        </a>
      </Link>
    </li>
  )
}

export const MobileMenuTemplate = ({ route, name }: MenuProps) => {
  const router = useRouter()
  return (
    <Menu.Item key={`${name}mobile`}>
      {({ active }) => (
        <a
          className={`${router?.asPath == route ? 'text-primary' : ''} ${
            active && 'bg-secondary'
          } p-4`}
          href={route}
        >
          {name}
        </a>
      )}
    </Menu.Item>
  )
}
