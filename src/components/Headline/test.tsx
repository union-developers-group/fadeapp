import { render } from '@testing-library/react'
import { Headline } from '.'


describe('<Headline />', () => {
  it('should render by default', () => {
    const { getByRole, queryByTestId } = render(
      <Headline as="h2" title="Hello World" />,
    )
    const heading = getByRole('heading', { name: 'Hello World' })
    const line = queryByTestId('underline')

    expect(heading.tagName.toLocaleLowerCase()).not.toBe('div')
    expect(heading).toBeInTheDocument()
    expect(line).toBe(null)
  })

  it('should render custom heading', () => {
    const { getByRole } = render(<Headline as="h1" title="Texto" />)
    const heading = getByRole('heading', { name: 'Texto' })

    expect(heading).toBeInTheDocument()
  })

  it('should render a line under the title', () => {
    const { queryByTestId } = render(<Headline withLine title="Hello World" />)
    const line = queryByTestId('underline')

    expect(line).not.toBe(null)
  })

  it('should match snapshot', () => {
    const { container } = render(<Headline as="h5" title="Hello" />)

    expect(container).toMatchSnapshot()
  })
})
