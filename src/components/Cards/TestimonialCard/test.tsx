import { render, screen } from '@testing-library/react'
import { TestimonialCard, TestimonialCardProps } from '.'

const { getByRole, getByText } = screen

const data:TestimonialCardProps = {
  name: 'John Doe',
  message: 'Loren ipsum dolor',
  image: 'http://cdn.com/photo-name.jpg',
}

describe('<TestimonialCard />', () => {
  it('Should render the testimonial card', () => {
    render(<TestimonialCard {...data} />)

    const name = getByRole('heading', { name: 'John Doe'})
    const message = getByText(  'Loren ipsum dolor')
    const image = getByRole('img', {name: 'John Doe'})

    expect(name).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'John Doe')
    expect(image).toHaveAttribute('src', 'http://cdn.com/photo-name.jpg')
  })

  it('Should match snapshot', () => {
    const { container } = render(<TestimonialCard {...data} />)

    expect(container).toMatchSnapshot()
  })
})