import { render } from '@testing-library/react'

import { Headline } from '.'
import { LineWidth } from './styles'

describe('<Headline />', () => {
  it('should render the heading', () => {
    const { getByTestId } = render(<Headline title="Hello World" />)

    const heading = getByTestId('Headline')

    expect(heading).toBeInTheDocument()
  })

  it('should have a size small', () => {
    const { getByTestId } = render(<Headline withLine title="Hello World" />)
    const heading = getByTestId('underline')

    expect(heading).toHaveClass(LineWidth['small'])
  })
  it('should have a size medium', () => {
    const { getByTestId } = render(<Headline withLine title="Hello World" />)
    const heading = getByTestId('underline')

    expect(heading).toHaveClass(LineWidth['medium'])
  })
  it('should have a size large', () => {
    const { getByTestId } = render(<Headline withLine title="Hello World" />)
    const heading = getByTestId('underline')

    expect(heading).toHaveClass(LineWidth['large'])
  })
})
