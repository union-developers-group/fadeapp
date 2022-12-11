import { render, screen } from '@testing-library/react'

import { ButtonSocialProps } from 'components/Buttons/ButtonSocial'

import { Footer } from '.'

const { getByRole } = screen

const data: ButtonSocialProps[] = [
  {
    name: 'Instagram',
    urlIcon: 'https://res.cloudinary.com/user/icon.svg',
    urlRedirect: 'https://site.com/',
  },
  {
    name: 'Youtube',
    urlIcon: 'https://res.cloudinary.com/user/icon2.svg',
    urlRedirect: 'https://site2.com/',
  },
  {
    name: 'Tiktok',
    urlIcon: 'https://res.cloudinary.com/user/icon3.svg',
    urlRedirect: 'https://site3.com/',
  },
]

describe('<Footer />', () => {
  it('should render by default', () => {
    render(
      <Footer
        items={data}
        title="Title"
        company="Company"
        linkCompany="https://company.com/"
      />,
    )

    const title = getByRole('heading', { name: 'Title' })
    const instagram = getByRole('link', { name: 'Instagram' })
    const youtube = getByRole('link', { name: 'Youtube' })
    const tiktok = getByRole('link', { name: 'Tiktok' })
    const copyright = getByRole('link', { name: 'Company' })

    expect(title).toBeInTheDocument()
    expect(instagram).toBeInTheDocument()
    expect(youtube).toBeInTheDocument()
    expect(tiktok).toBeInTheDocument()
    expect(copyright).toHaveAttribute('href', 'https://company.com/')
  })

  it('Should match snapshot', () => {
    const { container } = render(
      <Footer
        items={data}
        title="Title"
        company="Company"
        linkCompany="https://company.com/"
      />,
    )

    expect(container).toMatchSnapshot()
  })
})
