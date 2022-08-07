import { render, screen } from '@testing-library/react'

import { Logo } from '.'

const { getByLabelText } = screen

describe('<Logo />', () => {
  it('should render by default', () => {
    const { container } = render(<Logo width={400} height={80} />)

    const logo = getByLabelText('Fade App')
    const path1 = container.querySelector('svg > path:nth-child(1)')
    const path2 = container.querySelector('svg > path:nth-child(10)')
    const path3 = container.querySelector('svg > path:nth-child(11)')

    expect(logo).toHaveStyle({
      width: 400,
      height: 80,
    })

    expect(path1).not.toHaveClass('hidden')
    expect(path2).not.toHaveClass('hidden')
    expect(path3).not.toHaveClass('hidden')
  })

  it('should render only icon', () => {
    const { container } = render(<Logo width={400} height={80} hiddenText />)

    const logo = getByLabelText('Fade App')
    const path1 = container.querySelector('svg > path:nth-child(1)')
    const path2 = container.querySelector('svg > path:nth-child(10)')
    const path3 = container.querySelector('svg > path:nth-child(11)')

    expect(logo).toBeInTheDocument()

    expect(path1).toHaveClass('hidden')
    expect(path2).toHaveClass('hidden')
    expect(path3).toHaveClass('hidden')
  })

  it('should match snapshot', () => {
    const { container } = render(<Logo width={400} height={80} />)

    expect(container).toMatchSnapshot()
  })
})
