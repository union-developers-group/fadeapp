import { 
  Asset,
  Hero as HeroGraphCMS,
  Highlight as HighlightGraphCMS,
  TestimonialCard as TestimonialCardGraphCMS,
  About as AboutGraphCMS,
} from "graphql/generated/graphql"

type Background = {
  background: Pick<Asset, 'url'>
}

type Image = {
  image: Pick<Asset, 'url'>
}

type Hero = Pick<HeroGraphCMS, 'title' | 'subtitle' | 'textButton' | 'tryText' >

export interface HeroProps extends Hero, Image {}

type Highlight = Pick<HighlightGraphCMS, 'id' | 'title' | 'text' >

export interface HighlightProps extends Highlight, Image {}

type TestimonialCard = Pick<TestimonialCardGraphCMS, 'id' | 'name' | 'message' >

export interface TestimonialCardProps extends TestimonialCard, Image {}

type About = Pick<AboutGraphCMS, 'text' >

export interface AboutProps extends About, Background {}
