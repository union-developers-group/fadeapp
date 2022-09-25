import { ButtonSocialTemplate } from './templates/ButtonSocialTemplate'
import { ButtonSocialProps } from '../ButtonSocial'

import {
  FooterContainer,
  FooterCopyright,
  FooterTitle,
  SocialButtonsContainer,
} from './style'

interface FooterProps {
  title: string
  items: ButtonSocialProps[]
  company: string
}

export const Footer = ({ title, items, company }: FooterProps) => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <footer className={FooterContainer}>
      <h2 className={FooterTitle}>{title}</h2>
      <div className={SocialButtonsContainer}>
        {items.map(ButtonSocialTemplate)}
      </div>
      <span className={FooterCopyright}>
        © {company} - {currentYear}
      </span>
    </footer>
  )
}
