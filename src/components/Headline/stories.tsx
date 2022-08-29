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
  args: {
    title: 'Quem usa recomenda',
    withLine: false,
    as: 'h2',
    textPosition: 'center',
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
  textPosition: 'left',
}

export const WithLineLarge = Template.bind({})
WithLine.args = {
  withLine: true,
  lineSize: 'large',
  textPosition: 'left',
}

