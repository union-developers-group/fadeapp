import { render, screen } from '@testing-library/react'

import { Hero, HeroProps } from '.'

const data: HeroProps = {
  subtitle:
    'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
  minorText: 'Experimente 7 dias Grátis',
}

const { getByRole, getByText } = screen

describe('<Hero />', () => {
  it('should render the hero', () => {
    render(<Hero {...data} />)

    const hero = getByRole('heading', { name: 'Headline' })
    const subtitle = getByText(
      'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
    )
    const minorText = getByText('Experimente 7 dias Grátis')

    expect(hero).toBeInTheDocument()
    expect(subtitle).toHaveTextContent(
      'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
    )
    expect(minorText).toHaveTextContent('Experimente 7 dias Grátis')
  })

  it('should have the image', () => {
    render(<Hero {...data} />)
    const image = getByRole('hero', { name: '' })

    expect(image).toHaveStyle('background: url(/background.png)')
  })

  it('should render a button', () => {
    render(<Hero {...data} />)
    const button = getByRole('button', { name: 'EU QUERO' })

    expect(button).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Hero {...data} />)

    expect(container).toMatchSnapshot()
  })
})
