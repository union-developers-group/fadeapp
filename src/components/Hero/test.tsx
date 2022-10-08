import { render, screen } from '@testing-library/react'

import { Hero, HeroProps } from '.'

const data: HeroProps = {
  headlineTitle: 'Construa seu shape sem atrapalhar a sua rotina',
  subtitle:
    'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
  textButton: 'EU QUERO',
  tryText: 'Experimente 7 dias Grátis',
  image: 'http://www.cdn.com/background.png',
}

const { getByRole, getByText } = screen

describe('<Hero />', () => {
  it('should render the hero', () => {
    const { container } = render(<Hero {...data} />)

    const headline = getByRole('heading', {
      name: 'Construa seu shape sem atrapalhar a sua rotina',
    })
    const subtitle = getByText(
      'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
    )
    const tryText = getByText('Experimente 7 dias Grátis')
    const button = getByRole('button', { name: 'EU QUERO' })
    const image = container.firstChild

    expect(headline).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(tryText).toBeInTheDocument()
    expect(image).toHaveStyle(
      'background-image: url(http://www.cdn.com/background.png)',
    )
    expect(button).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Hero {...data} />)
    expect(container).toMatchSnapshot()
  })
})
