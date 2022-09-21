import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Highlight } from '.'
import { HighlightMock } from './mock'

export default {
  title: 'Components/Highlight',
  component: Highlight,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=164%3A16',
    },
  },
  args: {
    highlightItems: HighlightMock,
    inverterOrder: false,
    withLine: false,
  },
} as ComponentMeta<typeof Highlight>

const ListTemplate: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args} />
)

export const Default = ListTemplate.bind({})
Default.args = {}

export const WithLine = ListTemplate.bind({})
WithLine.args = {
  withLine: true,
}

export const WithLineAndInverterOrder = ListTemplate.bind({})
WithLineAndInverterOrder.args = {
  withLine: true,
  inverterOrder: true,
}

export const WithoutLine = ListTemplate.bind({})
WithoutLine.args = {}

export const WithoutLineAndInverterOrder = ListTemplate.bind({})
WithoutLineAndInverterOrder.args = {
  inverterOrder: true,
}
