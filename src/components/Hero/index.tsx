import { Headline } from 'components/Headline'
import { useState } from 'react'

import { Button } from 'components/Buttons/Button'
import { FormModal } from 'components/Form/FormModal'

import {
  ButtonContainer,
  ButtonStyle,
  HeroContainer,
  Subtitle,
  TitleContainer,
  Try,
} from './styles'

export interface HeroProps {
  subtitle: string
  headlineTitle: string
  textButton: string
  image: string
  tryText: string
}

export const Hero = ({
  subtitle,
  headlineTitle,
  textButton,
  tryText,
  image,
}: HeroProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function onOpen() {
    setIsOpen(true)
  }

  return (
    <div className={HeroContainer} style={{ backgroundImage: `url(${image})` }}>
      <FormModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={TitleContainer}>
        <Headline title={headlineTitle} />

        <p className={Subtitle}>{subtitle}</p>

        <div className={ButtonContainer}>
          <Button onClick={onOpen} className={ButtonStyle}>
            {textButton}
          </Button>

          <p className={Try}>{tryText}</p>
        </div>
      </div>
    </div>
  )
}
