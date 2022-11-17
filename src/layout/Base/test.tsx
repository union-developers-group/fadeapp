import { render, screen } from '@testing-library/react'
import { socialMock } from 'components/Buttons/ButtonSocial/mock'
import { menuMock } from 'components/Shared/Header/mock'
import Base, { BaseLayoutProps } from '.'

const { getByTestId } = screen

const data: BaseLayoutProps = {
  menu: menuMock,
  footerSection: {
    items: socialMock,
    company: 'Union Group',
    title: 'Nos acompanhe nas nossas redes',
  },
}

jest.mock('components/Shared/Header', () => ({
  __esModule: true,
  Header: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Header">{children}</div>
  },
}))

jest.mock('components/Shared/Footer', () => ({
  __esModule: true,
  Footer: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Footer">{children}</div>
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
    const footer = getByTestId('Mock Footer')

    expect(header).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })
})
