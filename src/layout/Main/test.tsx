import { render, screen } from '@testing-library/react'
import { socialMock } from 'components/ButtonSocial/mock'
import { menuMock } from 'components/Header/mock'
import { heroMock } from 'components/Hero/mock'
import { HighlightMock } from 'components/Highlight/mock'
import { plansMock } from 'components/PlanCard/mock'
import { testimonialUsersMock } from 'components/TestimonialCard/mock'

import { MainLayout, MainLayoutProps } from '.'

const { getByText, getByRole, getByTestId, getAllByTestId } = screen

const data: MainLayoutProps = {
  menu: menuMock,
  hero: heroMock,
  highlights: HighlightMock,
  testimonials: testimonialUsersMock,
  aboutSection: {
    background: 'https://cdn.com/photo-name.jpg',
    text: 'Loren ipsum dolor',
  },
  planSection: {
    plans: plansMock,
    tryText: 'Experimente Grátis por 7 dias',
  },
  footerSection: {
    items: socialMock,
    company: 'Union Group',
    title: 'Nos acompanhe nas nossas redes',
  },
}

jest.mock('components/Header', () => ({
  __esModule: true,
  Header: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Header">{children}</div>
  },
}))

jest.mock('components/ChatbootButton', () => ({
  __esModule: true,
  ChatbootButton: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ChatbootButton">{children}</div>
  },
}))

jest.mock('components/Hero', () => ({
  __esModule: true,
  Hero: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Hero">{children}</div>
  },
}))

jest.mock('components/Highlight', () => ({
  __esModule: true,
  Highlight: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Highlight">{children}</div>
  },
}))

jest.mock('components/Slider', () => ({
  __esModule: true,
  Slider: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Slider">{children}</div>
  },
}))

jest.mock('components/PlanCard', () => ({
  __esModule: true,
  PlanCard: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock PlanCard">{children}</div>
  },
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  Footer: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Footer">{children}</div>
  },
}))

describe('<Main />', () => {
  it('should render main page', () => {
    const { container } = render(<MainLayout {...data} />)

    const header = getByTestId('Mock Header')
    const chatbootButton = getByTestId('Mock ChatbootButton')
    const hero = getByTestId('Mock Hero')
    const highlight = getByTestId('Mock Highlight')
    const aboutTitle = getByRole('heading', { name: 'Sobre' })
    const aboutText = getByText('Loren ipsum dolor')
    const aboutBackground = container.querySelector('#about')
    const testimonialsTitle = getByRole('heading', {
      name: 'Quem usa recomenda',
    })
    const slider = getByTestId('Mock Slider')
    const plansTitle = getByRole('heading', {
      name: 'Escolha o melhor plano para você',
    })
    const plansTryText = getByText('Experimente Grátis por 7 dias')
    const plansLineText = getByText('ou')
    const planCards = getAllByTestId('Mock PlanCard')
    const footer = getByTestId('Mock Footer')

    expect(header).toBeInTheDocument()
    expect(chatbootButton).toBeInTheDocument()
    expect(hero).toBeInTheDocument()
    expect(highlight).toBeInTheDocument()
    expect(aboutTitle).toBeInTheDocument()
    expect(aboutText).toBeInTheDocument()
    expect(aboutBackground).toHaveStyle(
      'background: linear-gradient(103.85deg, rgba(0, 0, 0, 0.3822) 15.02%, rgba(0, 0, 0, 0.637) 87.81%), url(https://cdn.com/photo-name.jpg)',
    )
    expect(testimonialsTitle).toBeInTheDocument()
    expect(slider).toBeInTheDocument()
    expect(plansTitle).toBeInTheDocument()
    expect(plansTryText).toBeInTheDocument()
    expect(plansLineText).toBeInTheDocument()
    expect(planCards).toHaveLength(data.planSection.plans.length)
    expect(footer).toBeInTheDocument()
  })
})
