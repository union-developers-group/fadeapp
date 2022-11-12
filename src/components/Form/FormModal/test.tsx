/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react'

import { FormModal } from '.'

const { getByRole, getAllByRole, getByText } = screen

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

const isOpen = true
const mockedSetIsOpen = jest.fn()

describe('<FormModal />', () => {
  it('Should render FormModal', () => {
    render(<FormModal isOpen={isOpen} setIsOpen={mockedSetIsOpen} />)

    const modal = getByRole('dialog')
    const [closeModalButton, submitButton] = getAllByRole('button')
    const title = getByRole('heading', { name: 'Cadastre-se' })
    const text = getByText(
      /Enviaremos um email para confirmar o seu endereço . Leia a/i,
    )
    const link = getByRole('link')

    expect(modal).toBeInTheDocument()
    expect(closeModalButton).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    render(<FormModal isOpen={isOpen} setIsOpen={mockedSetIsOpen} />)

    const modal = getByRole('dialog')

    expect(modal).toMatchSnapshot()
  })
})
