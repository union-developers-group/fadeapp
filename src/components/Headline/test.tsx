import { render, screen } from '@testing-library/react'
import { Headline } from '.'

const { getByRole, queryByTestId, getByTestId } = screen

describe('<Headline />', () => {
  it('should render by default', () => {
    render(<Headline as="h2" title="Hello World" />)
    const heading = getByRole('heading', { name: 'Hello World' })
    const line = queryByTestId('underline')

    expect(heading.tagName.toLocaleLowerCase()).toBe('h2')
    expect(line).not.toBeInTheDocument()
  })

  it('should render custom heading', () => {
    render(<Headline position="center" as="h1" title="Texto" />)
    const heading = getByRole('heading', { name: 'Texto' })

    expect(heading.tagName.toLocaleLowerCase()).toBe('h1')
  })

  it('should render a line under the title', () => {
    render(<Headline position="center" as="h3" withLine title="Hello World" />)
    const line = getByTestId('underline')

    expect(line).toBeInTheDocument()
  })

  it('should render correct line size', () => {
    const { container, rerender } = render(
      <Headline as="h4" withLine lineSize="medium" title="Hello World" />,
    )

    expect(container.firstChild).toHaveClass('md:min-w-[25.25rem]')

    rerender(<Headline as="h5" withLine lineSize="large" title="Hello World" />)

    expect(container.firstChild).toHaveClass('max-w-max')
  })

  it('should render correct position', () => {
    const { container, rerender } = render(
      <Headline as="h6" withLine position="left" title="Hello World" />,
    )

    expect(container.firstChild).toHaveClass('items-start')

    rerender(<Headline withLine position="center" title="Hello World" />)

    expect(container.firstChild).toHaveClass('items-center')
  })

  it('should match snapshot', () => {
    const { container } = render(<Headline title="Hello" />)

    expect(container).toMatchSnapshot()
  })
})
