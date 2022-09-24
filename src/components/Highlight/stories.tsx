import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Highlight } from '.'
import { HighlightMock } from './mock'

export default {
  title: 'Components/Highlight',
  component: Highlight,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=617%3A84',
    },
  },
  args: {
    items: HighlightMock,
  },
} as ComponentMeta<typeof Highlight>

const ListTemplate: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args} />
)

export const Default = ListTemplate.bind({})
Default.args = {}
