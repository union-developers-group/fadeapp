import { render } from '@testing-library/react'

import { Headline } from '.'
import { LineStyle } from './styles'

describe('<Headline />', () => {
  it('should render by default', () => {
    const { getByTestId, container } = render(
      <Headline as="h2" title="Hello World" />,
    )
    const heading = getByTestId('Headline')
    const h2 = container.querySelector('h2')

    expect(heading).toHaveTextContent('Hello World')
    expect(heading).not.toHaveAttribute('withLine')
    expect(h2?.tagName.toLowerCase()).toBe('h2')
  })

  it('should have a tag with value h1', () => {
    const { container } = render(<Headline as="h1" title="Texto" />)
    const h1 = container.querySelector('h1')
    expect(h1?.tagName.toLowerCase()).toBe('h1')
  })

  it('should have a tag with value h3', () => {
    const { container } = render(<Headline as="h3" title="Texto" />)
    const h3 = container.querySelector('h3')
    expect(h3?.tagName.toLowerCase()).toBe('h3')
  })

  it('should render a line under the title', () => {
    const { getByTestId } = render(<Headline withLine title="Hello World" />)
    const line = getByTestId('underline')
    expect(line).toHaveClass(LineStyle)
  })
})
