import { FooterProps } from "types/graphql"

export const footerMapper = (footers: FooterProps[]) => {
  return ({   
      items: footers[0].socials.map((social) => ({
      name: social.name,
      urlIcon: social.image.url,
      urlRedirect: social.link,
    })),
    company: footers[0].companyName,
    title: footers[0].title,
    })
}
