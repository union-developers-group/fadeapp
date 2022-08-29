import { render, screen } from '@testing-library/react'

import { Hero } from '.'

const { getByRole } = screen

describe('<Hero />', () => {
  it('should render the hero', () => {
    render(<Hero />)

    const heading = getByRole('hero', { name: '' })

    expect(heading).toBeInTheDocument()
  })

   it('should have the image prop', () => {
     render(<Hero />)
     const image = getByRole('hero', { name: '' })

     expect(image).toHaveStyle('background: url(/background.png)')
   })

  
  it('should match snapshot', () => {
    const { container } = render(<Hero />)

    expect(container).toMatchSnapshot()
  })
})
