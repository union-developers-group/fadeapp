import { ComponentMeta, ComponentStory } from '@storybook/react'

import { testimonialUsersMock } from 'components/TestimonialCard/mock'

import { Slider } from '.'

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=608%3A132',
    },
  },
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {
  data: testimonialUsersMock,
}
