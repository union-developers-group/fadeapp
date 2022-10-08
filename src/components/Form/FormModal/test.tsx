/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, screen } from '@testing-library/react'

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

describe('<FormModal />', () => {
  it('Should render FormModal', () => {
    render(<FormModal />)

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

  it('Should close modal on icon click ', () => {
    render(<FormModal />)

    const modal = getByRole('dialog')
    const [closeModalButton] = getAllByRole('button')

    expect(modal).toBeInTheDocument()

    fireEvent.click(closeModalButton)

    expect(modal).not.toBeInTheDocument()
  })

  it('Should close modal on press ESC', () => {
    render(<FormModal />)

    const modal = getByRole('dialog')

    expect(modal).toBeInTheDocument()

    fireEvent.keyDown(modal, {
      key: 'Escape',
    })

    expect(modal).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    render(<FormModal />)

    const modal = getByRole('dialog')

    expect(modal).toMatchSnapshot()
  })
})
