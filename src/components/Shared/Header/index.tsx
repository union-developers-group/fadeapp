import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { Menu, Transition } from '@headlessui/react'
import Scrollspy from 'react-scrollspy'

import { Logo } from 'components/Shared/Logo'

import {
  DesktopMenuTemplate,
  MenuProps,
  MobileMenuTemplate,
} from './templates/menuTemplate'

import {
  navBarStyle,
  navBarLogoStyle,
  navBarUlStyle,
  navBarMenuMobuleButtonStyle,
  navBarMenuMobuleIconStyle,
  navBarMenuMobuleTransitionContextStyle,
  navBarMenuMobuleItemsStyle,
} from './styles'

export interface HeaderStylesProps {
  menu: string
  logo: string
}

export interface HeaderMenuProps {
  menu: MenuProps[]
}

export const Header = ({ menu }: HeaderMenuProps) => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)
  const [styles, setStyles] = useState<HeaderStylesProps>({
    menu: 'lg:py-8 lg:bg-transparent',
    logo: 'lg:w-56 lg:h-12',
  })

  const handleScroll = () => {
    if (window.scrollY > 32) {
      setStyles({
        menu: 'lg:py-3 lg:bg-accent',
        logo: 'lg:w-44 lg:h-9',
      })
    } else {
      setStyles({
        menu: 'lg:py-8 lg:bg-transparent',
        logo: 'lg:w-56 lg:h-12',
      })
    }
  }

  const handleMenuMobile = () => {
    setIsOpenMenuMobile((prev) => !prev)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav className={`${navBarStyle} ${styles.menu}`}>
        <div className={`${navBarLogoStyle} ${styles.logo}`}>
          <Logo />
        </div>

        <Scrollspy
          items={['services', 'about', 'testimonials', 'plans']}
          currentClassName="text-primary"
          className={navBarUlStyle}
          offset={-200}
        >
          {menu.map(DesktopMenuTemplate)}
        </Scrollspy>

        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                className={navBarMenuMobuleButtonStyle}
                aria-label={isOpenMenuMobile ? 'Fechar Menu' : 'Abrir Menu'}
                onClick={handleMenuMobile}
              >
                <Icon className={navBarMenuMobuleIconStyle} icon="bx:menu" />
              </Menu.Button>

              <Transition
                show={open}
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-y-0 opacity-0"
                enterTo="transform scale-y-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-y-100 opacity-100"
                leaveTo="transform scale-y-0 opacity-0"
                className={navBarMenuMobuleTransitionContextStyle}
              >
                <Menu.Items static className={navBarMenuMobuleItemsStyle}>
                  {menu.map(MobileMenuTemplate)}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </nav>
    </header>
  )
}
