import { render, screen } from '@testing-library/react'

import { Highlight, HighlightProps } from '.'

const { getByRole } = screen

const highlight: HighlightProps = {
  highlightItems: [
    {
      id: '0',
      title: 'Title',
      text: 'Text',
      image: 'http://cdn.com/photo-name.jpg',
    },
    {
      id: '1',
      title: 'Title2',
      text: 'Text2',
      image: 'http://cdn.com/photo2-name.jpg',
    },
    {
      id: '2',
      title: 'Title3',
      text: 'Text3',
      image: 'http://cdn.com/photo3-name.jpg',
    },
  ],
}

describe('<Highlight />', () => {
  it('should render by default', () => {
    const { container } = render(<Highlight {...highlight} />)

    const image = getByRole('img', { name: 'Title' })
    const highlightContainer = container.firstChild

    expect(image).toHaveAttribute('alt', 'Title')
    expect(image).toHaveAttribute('src', 'http://cdn.com/photo-name.jpg')
    expect(highlightContainer).not.toHaveClass(
      'after:content-[""] after:max-w-[55%] after:absolute after:bg-primary after:bottom-0 after:h-1 after:w-3/5 lg:after:w-4/5 after:last:hidden',
    )
    expect(highlight.highlightItems.length).toBe(3)
  })

  it('should render with line', () => {
    const { container } = render(<Highlight {...highlight} withLine />)

    const highlightContainer = container.firstChild

    expect(highlightContainer).toHaveClass(
      'after:content-[""] after:max-w-[55%] after:absolute after:bg-primary after:bottom-0 after:h-1 after:w-3/5 lg:after:w-4/5 after:last:hidden',
    )
  })

  it('should render with inverterOrder actived', () => {
    const { container } = render(<Highlight {...highlight} inverterOrder />)

    const highlightContainer = container.firstChild

    expect(highlightContainer).toHaveClass('lg:odd:flex-row-reverse')
  })

  it('should render with line and inverterOrder actived', () => {
    const { container } = render(
      <Highlight {...highlight} withLine inverterOrder />,
    )

    const highlightContainer = container.firstChild

    expect(highlightContainer).toHaveClass(
      'after:odd:left-0 after:even:right-0',
    )
  })

  it('Should match snapshot', () => {
    const { container } = render(<Highlight {...highlight} />)

    expect(container).toMatchSnapshot()
  })
})
