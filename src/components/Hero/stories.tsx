import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Hero } from '.'
import { hero } from './mock'

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=610%3A143',
    },
  },
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
  headlineTitle: hero.headlineTitle,
  subtitle: hero.subtitle,
  textButton: hero.textButton,
  tryText: hero.tryText,
  image: hero.image,
}
