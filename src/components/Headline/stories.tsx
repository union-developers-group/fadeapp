import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Headline } from '.'

export default {
  title: 'Components/Headline',
  component: Headline,
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
      default: 'dark',
    },
  },
} as ComponentMeta<typeof Headline>

const Template: ComponentStory<typeof Headline> = (args) => (
  <Headline {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Headline',
  withLine: false,
  as: 'h2',
}

export const CustomHeading = Template.bind({})
CustomHeading.args = {
  title: 'Heading without line',
  withLine: false,
  as: 'h4',
}

export const WithLine = Template.bind({})
WithLine.args = {
  title: 'Heading with line',
  withLine: true,
  lineSize: 'medium',
  as: 'h3',
}

