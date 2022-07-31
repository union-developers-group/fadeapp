import { render, screen } from '@testing-library/react'

import { Button } from '.'

const { getByRole } = screen

describe('<Button />', () => {
  it('should render by default', () => {
    render(<Button>Children</Button>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass('py-4 w-[21.5rem] text-lg h-[3.625rem]')
  })

  it('should render with custom class', () => {
    render(<Button className="uppercase">Children</Button>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass(
      'py-4 w-[21.5rem] text-lg h-[3.625rem] uppercase',
    )
  })

  it('should render with correct sizes', () => {
    const { rerender } = render(<Button size="small">Children</Button>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass('w-[16.188rem] text-2xl h-[2.875rem]')

    rerender(<Button size="medium">Children</Button>)

    expect(component).toHaveClass('py-4 w-[21.5rem] text-lg h-[3.625rem]')

    rerender(<Button size="large">Children</Button>)

    expect(component).toHaveClass('py-3 w-[22.188rem] text-lg h-[2.813rem]')
  })

  it('should match snapshot', () => {
    const { container } = render(<Button>Children</Button>)

    expect(container).toMatchSnapshot()
  })
})
