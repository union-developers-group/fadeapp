import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { ChatbootButton } from '.'

const { getByRole, getByText, queryByRole } = screen

describe('<ChatbootButton />', () => {
  it('Should render the ChatbootButton', () => {
    render(<ChatbootButton />)

    const text = getByText('Chat')
    const button = getByRole('button')
    const modal = queryByRole('dialog')

    expect(text).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(modal).not.toBeInTheDocument()
  })

  it('Should open modal on button click', async () => {
    render(<ChatbootButton />)

    const button = getByRole('button')

    fireEvent.click(button)

    await waitFor(() => {
      const modal = getByRole('dialog')

      expect(modal).toBeInTheDocument()
    })
  })

  it('should match snapshot', () => {
    const { container } = render(<ChatbootButton />)

    expect(container).toMatchSnapshot()
  })
})
