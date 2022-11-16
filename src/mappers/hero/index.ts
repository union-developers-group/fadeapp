import { HeroProps } from "types/graphql"

export const heroMapper = (hero: HeroProps[]) => {
  return ({   
      headlineTitle: hero[0].title,
      subtitle: hero[0].subtitle,
      textButton: hero[0].textButton,
      tryText: hero[0].tryText,
      image: hero[0].image.url, 
    })
}
