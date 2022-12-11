import { AboutProps } from "types/graphql"

export const aboutMapper = (abouts: AboutProps[]) => {
  return ({
    background: abouts[0].background.url,
    text: abouts[0].text,
  })
}
