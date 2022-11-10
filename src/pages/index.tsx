import { GetStaticProps } from 'next'

import { MainLayout, MainLayoutProps } from 'layout/Main'

import { menuMock } from 'components/Shared/Header/mock'
import { heroMock } from 'components/Hero/mock'
import { HighlightMock } from 'components/Highlight/mock'
import { testimonialUsersMock } from 'components/Cards/TestimonialCard/mock'
import { socialMock } from 'components/Buttons/ButtonSocial/mock'
import { plansMock } from 'components/Cards/PlanCard/mock'
import { client } from 'services/client'
import { gql } from '@apollo/client'

export default function Main(props: MainLayoutProps) {
  return <MainLayout {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GET_MAIN {
        menus {
          name
          link
        }
      }
    `,
  })

  console.log(data)

  return {
    props: {
      menu: menuMock,
      hero: heroMock,
      highlights: HighlightMock,
      testimonials: testimonialUsersMock,
      aboutSection: {
        background:
          'https://res.cloudinary.com/dbnq26wqe/image/upload/v1665003925/others/Rectangle_42_1_croz7y.jpg',
        text: 'O fade app é ideal para quem não deseja perder o foco do treino. Com ele é possível treinar a qualquer hora e em qualquer lugar, acessando as aulas preparadas por profissionais disponíveis ou seguindo as dicas de treino preparadas especialmente para o seu objetivo.',
      },
      planSection: {
        plans: plansMock,
        tryText: 'Experimente Grátis por 7 dias',
      },
      footerSection: {
        items: socialMock,
        company: 'Union Group',
        title: 'Nos acompanhe nas nossas redes',
      },
    },
  }
}
