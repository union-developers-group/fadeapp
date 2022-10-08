import { Button } from 'components/Buttons/Button'
import { Headline } from 'components/Headline'

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
  return (
    <div className={HeroContainer} style={{ backgroundImage: `url(${image})` }}>
      <div className={TitleContainer}>
        <Headline title={headlineTitle} />

        <p className={Subtitle}>{subtitle}</p>

        <div className={ButtonContainer}>
          <Button className={ButtonStyle}>{textButton}</Button>

          <p className={Try}>{tryText}</p>
        </div>
      </div>
    </div>
  )
}
