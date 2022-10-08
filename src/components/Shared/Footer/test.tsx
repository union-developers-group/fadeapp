import { render, screen } from '@testing-library/react'

import { ButtonSocialProps } from 'components/Buttons/ButtonSocial'

import { Footer } from '.'

const { getByRole, getByText, getAllByRole } = screen

const data: ButtonSocialProps[] = [
  {
    name: 'name',
    urlIcon: 'https://res.cloudinary.com/user/icon.svg',
    urlRedirect: 'https://site.com/',
  },
  {
    name: 'name2',
    urlIcon: 'https://res.cloudinary.com/user/icon2.svg',
    urlRedirect: 'https://site2.com/',
  },
  {
    name: 'name3',
    urlIcon: 'https://res.cloudinary.com/user/icon3.svg',
    urlRedirect: 'https://site3.com/',
  },
]

describe('<Footer />', () => {
  it('should render by default', () => {
    render(<Footer items={data} title="Title" company="Company" />)

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    const title = getByRole('heading', { name: 'Title' })
    const socials = getAllByRole('link')
    const copyright = getByText(`© Company - ${currentYear}`)

    expect(title).toBeInTheDocument()
    expect(socials).toHaveLength(data.length)
    expect(copyright).toBeInTheDocument()
  })

  it('Should match snapshot', () => {
    const { container } = render(
      <Footer items={data} title="Title" company="Company" />,
    )

    expect(container).toMatchSnapshot()
  })
})
