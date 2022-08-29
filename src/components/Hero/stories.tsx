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

const Template: ComponentStory<typeof Hero> = () => <Hero />

export const Default = Template.bind({})
Default.args = {}
