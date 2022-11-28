import { FooterProps } from "types/graphql"
import { footerMapper } from "."

const footer = [
  {
    socials: [
      {
        name: 'instagram',
        image:{
          url: 'https://site.com/user/image/upload/image-1.png'
        },
        link: 'https://instagram.com/',
      },
      {
        name: 'youtube',
        image:{
          url: 'https://site.com/user/image/upload/image-2.png'
        },
        link: 'https://www.youtube.com/',
      },
      {
        name: 'tiktok',
        image:{
          url: 'https://site.com/user/image/upload/image-3.png'
        },
        link: 'https://tiktok.com/',
      },
    ],
    title: 'Title 1',
    companyName:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    linkCompany: 'https://company.com/',
  },
] as FooterProps[]

describe('footerMapper', () => {
  it('should return the right format when mapped', () => {
    expect(footerMapper(footer)).toStrictEqual({
      items: [
        {
          name: 'instagram',
          urlIcon:'https://site.com/user/image/upload/image-1.png',
          urlRedirect: 'https://instagram.com/',
        },
        {
          name: 'youtube',
          urlIcon:'https://site.com/user/image/upload/image-2.png',
          urlRedirect: 'https://www.youtube.com/',
        },
        {
          name: 'tiktok',
          urlIcon:'https://site.com/user/image/upload/image-3.png',
          urlRedirect: 'https://tiktok.com/',
        },
      ],
      title: 'Title 1',
      company:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      linkCompany: 'https://company.com/',
    })
  })
})
