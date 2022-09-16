import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { Menu, Transition } from '@headlessui/react'

import {
  DesktopMenuTemplate,
  MenuProps,
  MobileMenuTemplate,
} from './templates/menuTemplate'

import { Logo } from 'components/Logo'

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

        <ul className={navBarUlStyle}>{menu.map(DesktopMenuTemplate)}</ul>

        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className={navBarMenuMobuleButtonStyle}>
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
