import { render } from '@testing-library/react'

import { Headline } from '.'
import { LineStyle } from './styles'

describe('<Headline />', () => {
  it('should render by default', () => {
    const { getByRole } = render(<Headline as="h2" title="Hello World" />)
    const heading = getByRole('heading', { name: 'Hello World' })

    expect(heading).not.toHaveAttribute('withLine')
    expect(heading).toBeInTheDocument()
  })

  it('should render custom heading', () => {
    const { getByRole } = render(<Headline as="h1" title="Texto" />)
    const heading = getByRole('heading', { name: 'Texto' })

    expect(heading).toBeInTheDocument()
  })

  it('should render a line under the title', () => {
    const { getByTestId } = render(<Headline withLine title="Hello World" />)
    const line = getByTestId('underline')

    expect(line).toHaveClass(LineStyle)
  })
})
