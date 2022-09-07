import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Headline } from '.'

export default {
  title: 'Components/Headline',
  component: Headline,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=2%3A3',
      default: 'dark',
    },
  },
  args: {
    title: 'Quem usa recomenda',
    withLine: false,
    as: 'h2',
    position: 'left',
    lineSize: 'medium',
  },
} as ComponentMeta<typeof Headline>

const Template: ComponentStory<typeof Headline> = (args) => (
  <Headline {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const CustomHeading = Template.bind({})
CustomHeading.args = {
  as: 'h4',
}

export const WithLine = Template.bind({})
WithLine.args = {
  withLine: true,
  lineSize: 'medium',
  position: 'center',
}

export const WithLineLarge = Template.bind({})
WithLine.args = {
  withLine: true,
  lineSize: 'large',
  position: 'center',
}

