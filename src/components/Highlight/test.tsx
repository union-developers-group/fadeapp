import { render, screen } from '@testing-library/react'

import { Highlight, HighlightProps } from '.'

const { getByRole, getByText, getByTestId } = screen

const data: HighlightProps = {
  title: 'Title',
  text: 'Text',
  image: 'http://cdn.com/photo-name.jpg',
}

describe('<Highlight />', () => {
  it('should render by default', () => {
    render(<Highlight {...data} />)

    const title = getByRole('heading', { name: 'Title' })
    const text = getByText('Text')
    const image = getByRole('img', { name: 'Title' })
    const highlightContainer = getByTestId('highlightContainer')

    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'Title')
    expect(image).toHaveAttribute('src', 'http://cdn.com/photo-name.jpg')
    expect(highlightContainer).not.toHaveClass(
      'after:content-[""] after:max-w-[55%] after:absolute after:bg-primary after:bottom-0 after:h-1 after:w-3/5 lg:after:w-4/5 lg:flex-row-reverse',
    )
  })

  it('should render with line', () => {
    render(<Highlight {...data} withLine />)

    const highlightContainer = getByTestId('highlightContainer')

    expect(highlightContainer).toHaveClass(
      'after:content-[""] after:max-w-[55%] after:absolute after:bg-primary after:bottom-0 after:h-1 after:w-3/5 lg:after:w-4/5 after:right-0',
    )
  })

  it('should render with inverterOrder actived', () => {
    render(<Highlight {...data} inverterOrder />)

    const highlightContainer = getByTestId('highlightContainer')

    expect(highlightContainer).toHaveClass('lg:flex-row-reverse')
  })

  it('should render with line and inverterOrder actived', () => {
    render(<Highlight {...data} withLine inverterOrder />)

    const highlightContainer = getByTestId('highlightContainer')

    expect(highlightContainer).toHaveClass('after:left-0')
  })

  it('Should match snapshot', () => {
    const { container } = render(<Highlight {...data} />)

    expect(container).toMatchSnapshot()
  })
})
