import { render, screen } from '@testing-library/react'

import { ButtonSocial, ButtonSocialProps } from '.'

const { getByRole, getByText } = screen

const data: ButtonSocialProps = {
  text: 'instagram',
  urlIcon: 'https://res.cloudinary.com/user/image/upload/img.png',
  urlRedirect: 'https://instagram.com/',
}

describe('<ButtonSocial />', () => {
  it('should render the deafult', () => {
    render(<ButtonSocial {...data} />)

    const text = getByText('instagram')
    const link = getByRole('link')
    const image = getByRole('img', { name: 'instagram' })

    expect(text).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://instagram.com/')
    expect(image).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/user/image/upload/img.png',
    )
    expect(image).toHaveAttribute('alt', 'instagram')
  })

  it('Should match snapshot', () => {
    const { container } = render(<ButtonSocial {...data} />)

    expect(container).toMatchSnapshot()
  })
})
