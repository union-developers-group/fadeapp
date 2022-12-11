import { ReactNode } from 'react'
import { Header } from 'components/Shared/Header'
import { MenuProps } from 'components/Shared/Header/templates/menuTemplate'

export interface BaseLayoutProps {
  menu: MenuProps[]
  children?: ReactNode
}

export const BaseLayout = ({ menu, children }: BaseLayoutProps) => {
  return (
    <>
      <Header menu={menu} />
      {children}
    </>
  )
}
