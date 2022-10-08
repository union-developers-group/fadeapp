import { Header } from 'components/Shared/Header'
import { Hero, HeroProps } from 'components/Hero'
import { ChatbootButton } from 'components/Chatboot/ChatbootButton'
import { Highlight, HighlightItemProps } from 'components/Highlight'
import { Headline } from 'components/Headline'
import { Slider } from 'components/Slider'
import { PlanCardProps } from 'components/Cards/PlanCard'
import { Footer } from 'components/Shared/Footer'
import { MenuProps } from 'components/Shared/Header/templates/menuTemplate'
import { TestimonialCardProps } from 'components/Cards/TestimonialCard'
import { ButtonSocialProps } from 'components/Buttons/ButtonSocial'

import { PlanCardTemplate } from './templates/PlanCardTemplate'

import {
  AboutContainer,
  AboutSection,
  AboutTextStyle,
  LineContainer,
  LineStyle,
  MainContainer,
  OrText,
  PlansContainer,
  PlanSectionStyles,
  PlansSection,
  ServicesContainer,
  TestimonialsContainer,
  TestimonialStyles,
  TryStyles,
  bgFinalSection,
} from './styles'

interface AboutSection {
  text: string
  background: string
}

interface FooterSection {
  items: ButtonSocialProps[]
  company: string
  title: string
}

interface PlanSection {
  plans: PlanCardProps[]
  tryText: string
}

export interface MainLayoutProps {
  menu: MenuProps[]
  hero: HeroProps
  aboutSection: AboutSection
  highlights: HighlightItemProps[]
  testimonials: TestimonialCardProps[]
  planSection: PlanSection
  footerSection: FooterSection
}

export const MainLayout = ({
  menu,
  hero,
  aboutSection,
  highlights,
  testimonials,
  planSection,
  footerSection,
}: MainLayoutProps) => {
  return (
    <main className={MainContainer}>
      <Header menu={menu} />

      <Hero
        subtitle={hero.subtitle}
        headlineTitle={hero.headlineTitle}
        image={hero.image}
        textButton={hero.textButton}
        tryText={hero.tryText}
      />

      <ChatbootButton />

      <section id="services" className={ServicesContainer}>
        <Highlight items={highlights} />
      </section>

      <section
        id="about"
        style={{
          background: `linear-gradient(103.85deg, rgba(0, 0, 0, 0.3822) 15.02%, rgba(0, 0, 0, 0.637) 87.81%), url(${aboutSection.background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
        className={AboutContainer}
      >
        <Headline withLine lineSize="large" title="Sobre" />

        <div className={AboutTextStyle}>
          <p>{aboutSection.text}</p>
        </div>
      </section>

      <div className={bgFinalSection}>
        <div id="testimonials" className={TestimonialsContainer}>
          <section className={TestimonialStyles}>
            <Headline
              title="Quem usa recomenda"
              withLine
              lineSize="large"
              position="center"
            />
            <Slider data={testimonials} />
          </section>

          <section id="plans" className={PlansContainer}>
            <div className={PlansSection}>
              <Headline title="Escolha o melhor plano para você" />
              <p className={TryStyles}>{planSection.tryText}</p>

              <div className={LineContainer}>
                <div className={LineStyle}></div>
                <span className={OrText}>ou</span>
                <div className={LineStyle}></div>
              </div>
            </div>

            <div className={PlanSectionStyles}>
              {planSection.plans.map(PlanCardTemplate)}
            </div>
          </section>

          <Footer
            items={footerSection.items}
            company={footerSection.company}
            title={footerSection.title}
          />
        </div>
      </div>
    </main>
  )
}
