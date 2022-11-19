import { GetStaticProps } from 'next'

import { MainLayout, MainLayoutProps } from 'layout/Main'

import { client } from 'services/client'

import { GET_MAIN } from 'graphql/queries'
import { GetMainQuery } from 'graphql/generated/graphql'

import { menuMapper } from 'mappers/menu'
import { heroMapper } from 'mappers/hero'
import { highlightsMapper } from 'mappers/highlights'
import { testimonialsMapper } from 'mappers/testimonials'
import { aboutMapper } from 'mappers/aboutSection'
import { footerMapper } from 'mappers/footer'

export default function Main(props: MainLayoutProps) {
  return <MainLayout {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: {
      menus,
      heroes,
      highlights,
      testimonialCards,
      abouts,
      planSections,
      footers,
    },
  } = await client.query<GetMainQuery>({
    query: GET_MAIN,
  })

  return {
    props: {
      menu: menuMapper(menus),
      hero: heroMapper(heroes),
      highlights: highlightsMapper(highlights),
      testimonials: testimonialsMapper(testimonialCards),
      aboutSection: aboutMapper(abouts),
      planSection: {
        plans: planSections[0].plans.map((plan) => ({
          planType: plan.plan,
          price: plan.price,
          image: plan.image.url,
          buttonText: plan.buttonText,
          tryText: planSections[0].tryText,
          haveOffer: plan?.promotional,
          equivalentValue: plan?.equivalentValue,
          offer: plan?.promotionalPrice,
        })),
      },
      footerSection: footerMapper(footers),
    },
  }
}
