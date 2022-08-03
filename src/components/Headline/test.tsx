import { render } from '@testing-library/react'

import { Headline } from '.'
import { LineWidth } from './styles'

describe('<Headline />', () => {
  it('should render the heading', () => {
    const { getByTestId } = render(<Headline title="Hello World" />)

    const heading = getByTestId('Headline')

    expect(heading).toBeInTheDocument()
  })

  it('should have a variant small', () => {
    const { getByTestId } = render(
      <Headline line variant="small" title="Hello World" />,
    )
    const heading = getByTestId('underline')

    expect(heading).toHaveClass(LineWidth['small'])
  })
  it('should have a variant medium', () => {
    const { getByTestId } = render(
      <Headline line variant="medium" title="Hello World" />,
    )
    const heading = getByTestId('underline')

    expect(heading).toHaveClass(LineWidth['medium'])
  })
  it('should have a variant large', () => {
    const { getByTestId } = render(
      <Headline line variant="large" title="Hello World" />,
    )
    const heading = getByTestId('underline')

    expect(heading).toHaveClass(LineWidth['large'])
  })
})
