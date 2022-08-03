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
  title: 'Headline'
}
