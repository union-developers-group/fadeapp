import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Sample } from '.'

export default {
  title: 'Components/Sample',
  component: Sample,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=608%3A226',
    },
  },
} as ComponentMeta<typeof Sample>

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
  size: 'medium',
  children: 'Children',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  size: 'medium',
  children: 'Children',
}
