import { ButtonSocialProps } from 'components/Buttons/ButtonSocial'
import { Footer } from 'components/Shared/Footer'
import { Header } from 'components/Shared/Header'
import { MenuProps } from 'components/Shared/Header/templates/menuTemplate'
import React, { ReactNode } from 'react'
import { baseContainerStyles } from './styles'

interface FooterSection {
  items: ButtonSocialProps[]
  company: string
  title: string
}

export interface BaseLayoutProps {
  children?: ReactNode
  menu: MenuProps[]
  footerSection: FooterSection
}

export default function index({
  children,
  footerSection,
  menu,
}: BaseLayoutProps) {
  return (
    <main className={baseContainerStyles}>
      <Header menu={menu} />
      {children}{' '}
      <Footer
        items={footerSection.items}
        company={footerSection.company}
        title={footerSection.title}
      />
    </main>
  )
}
