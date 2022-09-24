import { render, screen } from '@testing-library/react'

import { Highlight, HighlightItemProps } from '.'

const { getByRole, getAllByTestId } = screen

const data: HighlightItemProps[] = [
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
]

describe('<Highlight />', () => {
  it('should render by default', () => {
    render(<Highlight items={data} />)

    const image = getByRole('img', { name: 'Title' })
    const highlights = getAllByTestId('highlight-container')

    expect(image).toHaveAttribute('alt', 'Title')
    expect(image).toHaveAttribute('src', 'http://cdn.com/photo-name.jpg')
    expect(highlights).toHaveLength(data.length)
  })

  it('Should match snapshot', () => {
    const { container } = render(<Highlight items={data} />)

    expect(container).toMatchSnapshot()
  })
})
