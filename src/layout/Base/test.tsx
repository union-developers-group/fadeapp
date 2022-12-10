import { render, screen } from '@testing-library/react'
import { menuMock } from 'components/Shared/Header/mock'
import Base, { BaseLayoutProps } from '.'

const { getByTestId } = screen

const data: BaseLayoutProps = {
  menu: menuMock,
}

jest.mock('components/Shared/Header', () => ({
  __esModule: true,
  Header: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Header">{children}</div>
  },
}))

describe('Base', () => {
  it('should render children, footer and header', () => {
    render(
      <Base {...data}>
        <h1>Title</h1>{' '}
      </Base>,
    )

    const header = getByTestId('Mock Header')

    expect(header).toBeInTheDocument()
  })
})
