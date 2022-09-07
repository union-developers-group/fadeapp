/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, screen } from '@testing-library/react'

import { ChatbootModal } from '.'

const { getByRole, getAllByLabelText, getAllByRole } = screen

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

describe('<ChatbootModal />', () => {
  it('Should render ChatbootModal', () => {
    render(<ChatbootModal />)

    const modal = getByRole('dialog')
    const [headerLogo] = getAllByLabelText('Fade App')
    const [closeModalButton, sendMessageBtton] = getAllByRole('button')
    const textarea = getByRole('textbox')

    expect(modal).toBeInTheDocument()
    expect(headerLogo).toBeInTheDocument()
    expect(closeModalButton).toBeInTheDocument()
    expect(textarea).toBeInTheDocument()
    expect(sendMessageBtton).toBeInTheDocument()
  })

  it('Should close modal on icon click ', () => {
    render(<ChatbootModal />)

    const modal = getByRole('dialog')
    const [closeModalButton] = getAllByRole('button')

    expect(modal).toBeInTheDocument()

    fireEvent.click(closeModalButton)

    expect(modal).not.toBeInTheDocument()
  })

  it('Should close modal on press ESC', () => {
    render(<ChatbootModal />)

    const modal = getByRole('dialog')

    expect(modal).toBeInTheDocument()

    fireEvent.keyDown(modal, {
      key: 'Escape',
    })

    expect(modal).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<ChatbootModal />)

    expect(container).toMatchSnapshot()
  })
})
