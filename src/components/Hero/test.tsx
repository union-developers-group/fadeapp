import { render, screen } from '@testing-library/react'

import { Hero } from '.'

const { getByRole } = screen

describe('<Hero />', () => {
  it('should render the hero', () => {
    render(<Hero />)

    const heading = getByRole('hero', { name: '' })

    expect(heading).toBeInTheDocument()
  })
})
