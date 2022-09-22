import { render, screen } from '@testing-library/react'

import { Hero, HeroProps } from '.'

const data: HeroProps = {
  headlineTitle: 'Construa seu shape sem atrapalhar a sua rotina',
  subtitle:
    'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
  textButton: 'EU QUERO',
  minorText: 'Experimente 7 dias Grátis',
  image: './background.png',
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
    const button = getByRole('button', { name: 'EU QUERO' })
    const { container } = render(<Hero {...data} />)
    const image = container.firstChild

    expect(hero).toBeInTheDocument()
    expect(subtitle).toHaveTextContent(
      'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
    )
    expect(minorText).toHaveTextContent('Experimente 7 dias Grátis')
    expect(image).toHaveStyle('background-image: url(./background.png)')
    expect(button).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
