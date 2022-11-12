/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

const { getByRole, getByText, queryByRole } = screen

import { Hero, HeroProps } from '.'

const data: HeroProps = {
  headlineTitle: 'Construa seu shape sem atrapalhar a sua rotina',
  subtitle:
    'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
  textButton: 'EU QUERO',
  tryText: 'Experimente 7 dias Grátis',
  image: 'http://www.cdn.com/background.png',
}

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null
  }

  disconnect() {
    return null
  }

  unobserve() {
    return null
  }
} as any

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
    const modal = queryByRole('dialog')

    expect(headline).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(tryText).toBeInTheDocument()
    expect(image).toHaveStyle(
      'background-image: url(http://www.cdn.com/background.png)',
    )
    expect(button).toBeInTheDocument()
    expect(modal).not.toBeInTheDocument()
  })

  it('Should open modal on button click', async () => {
    render(<Hero {...data} />)

    const button = getByRole('button', { name: 'EU QUERO' })

    fireEvent.click(button)

    await waitFor(() => {
      const modal = getByRole('dialog')

      expect(modal).toBeInTheDocument()
    })
  })

  it('should match snapshot', () => {
    const { container } = render(<Hero {...data} />)
    expect(container).toMatchSnapshot()
  })
})
