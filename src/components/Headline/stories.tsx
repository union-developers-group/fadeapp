import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Headline } from '.'

export default {
  title: 'Components/Headline',
  component: Headline,
   parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
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

export const CustomHeadingWithoutLine = Template.bind({})
Default.args = {
  title: 'Heading without line',
  withLine: false,
  as: 'h4',
}

export const CustomHeadingWithLine = Template.bind({})
Default.args = {
  title: 'Heading with line',
  withLine: true,
  as: 'h3',
}


