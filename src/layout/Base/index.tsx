import { Header } from 'components/Shared/Header'
import { MenuProps } from 'components/Shared/Header/templates/menuTemplate'
import React, { ReactNode } from 'react'
import { baseContainerStyles } from './styles'

export interface BaseLayoutProps {
  children?: ReactNode
  menu: MenuProps[]
}

export default function index({ children, menu }: BaseLayoutProps) {
  return (
    <div className={baseContainerStyles}>
      <Header menu={menu} />
      {children}{' '}
    </div>
  )
}
