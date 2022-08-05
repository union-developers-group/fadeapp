import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
  width: 400,
  height: 85,
  hiddenText: false,
}

export const HiddenText = Template.bind({})
Default.args = {
  width: 400,
  height: 85,
  hiddenText: true,
}
