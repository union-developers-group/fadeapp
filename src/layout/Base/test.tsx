import { render, screen } from '@testing-library/react'

import { menuMock } from 'components/Shared/Header/mock'

import { BaseLayout, BaseLayoutProps } from '.'

const { getByTestId, getByText } = screen

jest.mock('components/Shared/Header', () => ({
  __esModule: true,
  Header: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Header">{children}</div>
  },
}))

const data: BaseLayoutProps = {
  menu: menuMock,
  children: <main>main</main>,
}

describe('<Base />', () => {
  const { menu, children } = data

  it('should render Base layout', () => {
    render(<BaseLayout menu={menu}>{children}</BaseLayout>)
    const header = getByTestId('Mock Header')
    const main = getByText('main')

    expect(header).toBeInTheDocument()
    expect(main).toBeInTheDocument()
  })
})
