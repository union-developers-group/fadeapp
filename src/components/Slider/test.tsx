import { render, screen } from '@testing-library/react'

import { testimonialUsersMock } from 'components/TestimonialCard/mock'

const { getAllByTestId } = screen

import { Slider } from '.'

jest.mock('components/TestimonialCard', () => ({
  __esModule: true,
  TestimonialCard: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock TestimonialCard">{children}</div>
  },
}))

describe('<Slider />', () => {
  it('should render slider', () => {
    render(<Slider data={testimonialUsersMock} />)

    const testimonialCards = getAllByTestId('Mock TestimonialCard')

    expect(testimonialCards).toHaveLength(testimonialUsersMock.length)
  })

  it('should match snapshot', () => {
    const { container } = render(<Slider data={testimonialUsersMock} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
