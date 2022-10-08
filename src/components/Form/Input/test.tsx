import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from '.'

const { getByText, getByRole } = screen

describe('<Input />', () => {
  it('Should render Input', () => {
    render(<Input label="Nome" name="name" />)

    const input = getByRole('textbox', { name: 'Nome' })
    const label = getByText('Nome')

    expect(label).toBeInTheDocument()

    expect(input).toHaveAttribute('name', 'name')
    expect(input).toHaveAttribute('id', 'name')
  })

  it('Should change label styles', () => {
    const initialValue = ''
    render(<Input label="Nome" name="name" value={initialValue} />)

    const input = getByRole('textbox', { name: 'Nome' })
    const label = getByText('Nome')

    expect(label).toHaveClass('text-[1.125rem] leading-[1.3125rem] top-1')

    input.focus()

    expect(label).toHaveClass(
      'text-[0.75rem] top-[-0.215rem] leading-[0.875rem]',
    )

    input.blur()

    expect(label).toHaveClass('text-[1.125rem] leading-[1.3125rem] top-1')
  })

  it('Should change value on type', async () => {
    render(<Input label="Nome" name="name" value="" />)

    const text = 'John Doe'
    const input = getByRole('textbox', { name: 'Nome' })

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveDisplayValue('John Doe')

      input.blur()
    })
  })

  it('Should match snapshot', () => {
    const { container } = render(<Input label="Nome" name="name" value="" />)

    expect(container).toMatchSnapshot()
  })
})
