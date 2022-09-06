import { render, screen } from '@testing-library/react'

import { Hero, HeroProps } from '.'

const data: HeroProps = {
  headlineTitle: 'Construa seu shape sem atrapalhar a sua rotina',
  subtitle:
    'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
  img: '/background.png',
  textButton: 'EU QUERO',
}

const { getByRole, getByText } = screen

describe('<Hero />', () => {
  it('should render the hero', () => {
    render(<Hero {...data} />)

    const hero = getByRole('heading', {
      name: 'Construa seu shape sem atrapalhar a sua rotina',
    })
    const subtitle = getByText(
      'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
    )
    const minorText = getByText('Experimente 7 dias Grátis')
    const image = getByRole('hero', { name: '' })
    const button = getByRole('button', { name: 'EU QUERO' })
    const { container } = render(<Hero {...data} />)

    expect(hero).toBeInTheDocument()
    expect(subtitle).toHaveTextContent(
      'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
    )
    expect(minorText).toHaveTextContent('Experimente 7 dias Grátis')
    expect(image).toHaveStyle('background: url(/background.png)')
    expect(button).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
