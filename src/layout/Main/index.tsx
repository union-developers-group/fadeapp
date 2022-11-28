import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

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

import { BaseLayout } from 'layout/Base'

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
  linkCompany: string
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
  const control = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      control.start('visible')
    }
  }, [control, isInView])

  return (
    <>
      <BaseLayout menu={menu}>
        <main className={MainContainer}>
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
            ref={ref}
            id="about"
            style={{
              background: `linear-gradient(103.85deg, rgba(0, 0, 0, 0.3822) 15.02%, rgba(0, 0, 0, 0.637) 87.81%), url(${aboutSection.background})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
            className={AboutContainer}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <Headline withLine lineSize="large" title="Sobre" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  breakBefore: 'all',
                },
                hidden: { opacity: 0, scale: 0, breakBefore: 'inherit' },
              }}
              className={AboutTextStyle}
            >
              <p>{aboutSection.text}</p>
            </motion.div>
            <div className="absolute bottom-[-3px] h-[0.25rem] w-[80%] bg-primary"></div>
          </section>

          <div className={`${bgFinalSection} ${TestimonialsContainer}`}>
            <section id="testimonials" className={TestimonialStyles}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.4,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Headline
                  title="Quem usa recomenda"
                  withLine
                  lineSize="large"
                  position="center"
                />
              </motion.div>
              <Slider data={testimonials} />
            </section>

            <section id="plans" className={PlansContainer}>
              <div className={PlansSection}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <Headline title="Escolha o melhor plano para você" />
                </motion.div>

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
              linkCompany={footerSection.linkCompany}
              title={footerSection.title}
            />
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
