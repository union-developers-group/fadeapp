import { render, screen, fireEvent } from '@testing-library/react'

import { Header } from '.'

import { menuMock } from './mock'

const { getByRole, getAllByRole, getByText, queryByRole } = screen

describe('<Header />', () => {
  it('should render Header', () => {
    render(<Header menu={menuMock} />)

    const logoNavBar = getByRole('img', { name: 'Fade App' })
    const serviceLink = getByText('Serviços')
    const aboutLink = getByText('Sobre')
    const testimonialsLink = getByText('Depoimentos')
    const plansLink = getByText('Planos')
    const links = getAllByRole('link', { hidden: true })

    expect(logoNavBar).toBeInTheDocument()
    expect(serviceLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(testimonialsLink).toBeInTheDocument()
    expect(plansLink).toBeInTheDocument()
    expect(links).toHaveLength(4)
  })

  it('should render desktop menu', async () => {
    render(<Header menu={menuMock} />)
    const serviceLink = getByText('Serviços')
    const aboutLink = getByText('Sobre')
    const testimonialLink = getByText('Depoimentos')
    const plansLink = getByText('Planos')

    const serviceMobileLink = queryByRole('menuitem', { name: 'Serviços' })
    const aboutMobileLink = queryByRole('menuitem', { name: 'Sobre' })
    const testimonialMobileLink = queryByRole('menuitem', {
      name: 'Depoimentos',
    })
    const plansMobileLink = queryByRole('menuitem', { name: 'Planos' })

    expect(serviceLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(testimonialLink).toBeInTheDocument()
    expect(plansLink).toBeInTheDocument()

    expect(serviceMobileLink).not.toBeInTheDocument()
    expect(aboutMobileLink).not.toBeInTheDocument()
    expect(testimonialMobileLink).not.toBeInTheDocument()
    expect(plansMobileLink).not.toBeInTheDocument()
  })

  it('should render mobile menu', async () => {
    render(<Header menu={menuMock} />)

    const hamburgerButton = getByRole('button', { expanded: false })

    fireEvent.click(hamburgerButton)

    const serviceMobileLink = queryByRole('menuitem', { name: 'Serviços' })
    const aboutMobileLink = queryByRole('menuitem', { name: 'Sobre' })
    const testimonialMobileLink = queryByRole('menuitem', {
      name: 'Depoimentos',
    })
    const plansMobileLink = queryByRole('menuitem', { name: 'Planos' })

    expect(serviceMobileLink).toBeInTheDocument()
    expect(aboutMobileLink).toBeInTheDocument()
    expect(testimonialMobileLink).toBeInTheDocument()
    expect(plansMobileLink).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', async () => {
    render(<Header menu={menuMock} />)
    const openButton = getByRole('button', { expanded: false })

    fireEvent.click(openButton)

    const showServiceMobileLink = getByRole('menuitem', { name: 'Serviços' })
    const showAboutMobileLink = getByRole('menuitem', { name: 'Sobre' })
    const showTestimonialMobileLink = getByRole('menuitem', {
      name: 'Depoimentos',
    })
    const showPlansMobileLink = getByRole('menuitem', { name: 'Planos' })

    expect(showServiceMobileLink).toBeInTheDocument()
    expect(showAboutMobileLink).toBeInTheDocument()
    expect(showTestimonialMobileLink).toBeInTheDocument()
    expect(showPlansMobileLink).toBeInTheDocument()

    const closeButton = getByRole('button', { expanded: true })

    fireEvent.click(closeButton)

    const hiddenServiceMobileLink = queryByRole('menuitem', {
      name: 'Serviços',
    })
    const hiddenAboutMobileLink = queryByRole('menuitem', {
      name: 'Sobre',
    })
    const hiddenTestimonialMobileLink = queryByRole('menuitem', {
      name: 'Depoimentos',
    })
    const hiddenPlansMobileLink = queryByRole('menuitem', {
      name: 'Planos',
    })

    expect(hiddenServiceMobileLink).not.toBeInTheDocument()
    expect(hiddenAboutMobileLink).not.toBeInTheDocument()
    expect(hiddenTestimonialMobileLink).not.toBeInTheDocument()
    expect(hiddenPlansMobileLink).not.toBeInTheDocument()
  })

  it('should change menu styles on scroll', async () => {
    render(<Header menu={menuMock} />)
    const navBar = getByRole('navigation')
    fireEvent.scroll(navBar)
  })

  it('should match snapshot', () => {
    const { container } = render(<Header menu={menuMock} />)

    expect(container).toMatchSnapshot()
  })
})
