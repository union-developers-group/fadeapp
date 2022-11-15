import { GetStaticProps } from 'next'

import { MainLayout, MainLayoutProps } from 'layout/Main'

import { client } from 'services/client'

import { GET_MAIN } from 'graphql/queries'
import { GetMainQuery } from 'graphql/generated/graphql'

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
      menu: menus.map((menu) => ({
        name: menu.name,
        route: `/#${menu.link}`,
      })),
      hero: {
        headlineTitle: heroes[0].title,
        subtitle: heroes[0].subtitle,
        textButton: heroes[0].textButton,
        tryText: heroes[0].tryText,
        image: heroes[0].image.url,
      },
      highlights: highlights.map((highlight) => ({
        id: highlight.id,
        title: highlight.title,
        text: highlight.text,
        image: highlight.image.url,
      })),
      testimonials: testimonialCards.map((testimonialCard) => ({
        id: testimonialCard.id,
        name: testimonialCard.name,
        message: testimonialCard.message,
        image: testimonialCard.image.url,
      })),
      aboutSection: {
        background: abouts[0].background.url,
        text: abouts[0].text,
      },
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
      footerSection: {
        items: footers[0].socials.map((social) => ({
          name: social.name,
          urlIcon: social.image.url,
          urlRedirect: social.link,
        })),
        company: footers[0].companyName,
        title: footers[0].title,
      },
    },
  }
}
