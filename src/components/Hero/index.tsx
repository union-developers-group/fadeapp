import { Button } from 'components/Button'
import {
  ButtonContainer,
  HeroContainer,
  Subtitle,
  TitleContainer,
  Try,
} from './styles'

const img = '/background.png'

export interface HeroProps {
  subtitle: string
  minorText: string
}

export const Hero = ({ subtitle, minorText }: HeroProps) => {
  return (
    <section
      role="hero"
      className={HeroContainer}
      style={{
        background: `url(${img})`,
        backgroundPosition: 'center',
      }}
    >
      <div className={TitleContainer}>
        <h2>Headline</h2>
        <p className={Subtitle}>{subtitle}</p>

        <div className={ButtonContainer}>
          <Button>EU QUERO</Button>
          <p className={Try}>{minorText}</p>
        </div>
      </div>
    </section>
  )
}
