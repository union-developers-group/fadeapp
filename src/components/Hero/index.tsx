import { Button } from 'components/Button'
import {
  ButtonContainer,
  HeroContainer,
  Subtitle,
  TitleContainer,
  Try,
} from './styles'



export interface HeroProps {
  subtitle: string
  img: string
  headlineTitle: string
}

export const Hero = ({ subtitle, img, headlineTitle }: HeroProps) => {
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
        <h2>{headlineTitle}</h2>
        <p className={Subtitle}>{subtitle}</p>

        <div className={ButtonContainer}>
          <Button>EU QUERO</Button>
          <p className={Try}>Experimente 7 dias Grátis</p>
        </div>
      </div>
    </section>
  )
}
