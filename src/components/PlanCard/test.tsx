import { render, screen } from '@testing-library/react'

import { PlanCard, PlanCardProps } from '.'

const { getByRole, queryByText, getByText } = screen

export const data: PlanCardProps[] = [
  {
    planType: 'Semanal',
    price: 9.99,
    haveOffer: false,
    image: 'http://cdn.com/photo-name.jpg',
    buttonText: 'Assine',
  },
  {
    planType: 'Mensal',
    price: 22.99,
    haveOffer: true,
    equivalentValue: 5.75,
    offer: 54,
    image: 'http://cdn.com/photo-name.jpg',
    buttonText: 'Assine',
  },
]

describe('<PlanCard />', () => {
  it('should render by default', () => {
    const { container } = render(<PlanCard {...data[0]} />)

    const heading = getByRole('heading', { name: 'Semanal' })
    const button = getByRole('button', { name: 'Assine' })
    const offer = queryByText('54%')
    const planType = getByRole('heading', { name: 'Semanal' })
    const image = container.firstChild
    const renewText = getByText('Renovação automática')
    const price = getByText('9,99')

    expect(heading).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(offer).not.toBeInTheDocument()
    expect(image).toHaveStyle(
      'background-image: url(http://cdn.com/photo-name.jpg)',
    )
    expect(planType).toBeInTheDocument()
    expect(renewText).toBeInTheDocument()
  })
  it('should render with offer', () => {
    render(<PlanCard {...data[1]} />)

    const heading = getByRole('heading', { name: 'Mensal' })
    const offerPercentage = getByText('54%')
    const planType = getByRole('heading', { name: 'Mensal' })
    const price = getByText('22,99')
    const equivalentValue = getByText('(Equivalente a R$ 5,75 por semana)')

    expect(heading).toBeInTheDocument()
    expect(planType).toBeInTheDocument()
    expect(offerPercentage).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(equivalentValue).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<PlanCard {...data[0]} />)

    expect(container).toMatchSnapshot()
  })
})
