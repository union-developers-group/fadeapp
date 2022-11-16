import { Asset } from "graphql/generated/graphql"
import { Hero as HeroGraphCMS } from "graphql/generated/graphql"

type Image = {
  image: Pick<Asset, 'url'>
}

type Hero = Pick<HeroGraphCMS, 'title' | 'subtitle' | 'textButton' | 'tryText' >

export interface HeroProps extends Hero, Image {}