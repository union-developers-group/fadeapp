import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Hero } from '.'

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
  headlineTitle: 'Construa seu shape sem atrapalhar a sua rotina',
  subtitle:
    'Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.',
  img: '/background.png',
}
