import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Hero } from '.'

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=610%3A143',
    },
  },
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
  headlineTitle: 'Construa seu shape sem atrapalhar a sua rotina',
  subtitle:
    'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
  textButton: 'EU QUERO',
  minorText: 'Experimente 7 dias Grátis',
  image: '/background.png',
}
