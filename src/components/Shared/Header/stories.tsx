import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Header } from '.'
import { menuMock, selectedVariantRoutes } from './mock'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=608%3A288',
    },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <div className="h-[1200px]">
    <Header {...args} />
  </div>
)

export const Default = Template.bind({})
export const Selected = Template.bind({})

Default.args = {
  menu: menuMock,
}

Selected.args = {
  menu: selectedVariantRoutes,
}
