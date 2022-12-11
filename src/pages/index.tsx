import { GetStaticProps } from 'next'

import { MainLayout, MainLayoutProps } from 'layout/Main'

import { client } from 'services/client'

import { GET_MAIN } from 'graphql/queries'
import { GetMainQuery } from 'graphql/generated/graphql'

import { menuMapper } from 'mappers/menu'
import { heroMapper } from 'mappers/hero'
import { highlightsMapper } from 'mappers/highlights'
import { aboutMapper } from 'mappers/aboutSection'
import { testimonialsMapper } from 'mappers/testimonials'
import { planSectionMapper } from 'mappers/planSection'
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
      abouts,
      testimonialCards,
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
      aboutSection: aboutMapper(abouts),
      testimonials: testimonialsMapper(testimonialCards),
      planSection: planSectionMapper(planSections),
      footerSection: footerMapper(footers),
    },
  }
}
