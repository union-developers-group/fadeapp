import { render, screen } from '@testing-library/react'

import { Sample } from '.'

const { getByRole } = screen

describe('<Button />', () => {
  it('should render by default', () => {
    render(<Sample>Children</Sample>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass('bg-primary text-zinc-50 py-4 w-[21.188rem]')
  })

  it('should render with outline variant', () => {
    render(<Sample variant="outline">Children</Sample>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass(
      'bg-transparent border-2 border-primary text-primary py-4 w-[21.188rem]',
    )
  })

  it('should render with correct sizes', () => {
    const { rerender } = render(<Sample size="small">Children</Sample>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass('py-0 w-[16.188rem]')

    rerender(<Sample size="medium">Children</Sample>)

    expect(component).toHaveClass('py-4 w-[21.188rem]')

    rerender(<Sample size="large">Children</Sample>)

    expect(component).toHaveClass('w-[22.188rem]')
  })

  it('should match snapshot', () => {
    const { container } = render(<Sample>Children</Sample>)

    expect(container).toMatchSnapshot()
  })
})
