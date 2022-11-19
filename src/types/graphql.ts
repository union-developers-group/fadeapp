import { 
  Asset,
  Hero as HeroGraphCMS,
  Highlight as HighlightGraphCMS,
  About as AboutGraphCMS,
  TestimonialCard as TestimonialCardGraphCMS,
  PlanCard as PlanCardGraphCMS,
  Social as SocialGraphCMS,
  Footer as FooterGraphCMS,
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

type About = Pick<AboutGraphCMS, 'text' >

export interface AboutProps extends About, Background {}

type TestimonialCard = Pick<TestimonialCardGraphCMS, 'id' | 'name' | 'message' >

export interface TestimonialCardProps extends TestimonialCard, Image {}

type PlanCard = Pick<PlanCardGraphCMS, 'plan' | 'price' | 'buttonText' | 'promotional' | 'equivalentValue' | 'promotionalPrice'>

interface PlanCardProps extends Image, PlanCard {}

export interface PlanSectionProps {
  tryText: string
  plans: PlanCardProps[] 
}

type Social = Pick<SocialGraphCMS, 'name' | 'link'>

interface SocialProps extends Social, Image {}

type Footer = Pick<FooterGraphCMS, 'companyName' | 'title' >

export interface FooterProps extends Footer {
  socials : SocialProps[]
}
