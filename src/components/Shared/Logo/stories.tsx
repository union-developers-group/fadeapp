import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
  args: {
    width: 400,
    height: 85,
    hiddenText: false,
    colorText: 'light',
  },
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})

export const HiddenText = Template.bind({})
HiddenText.args = {
  hiddenText: true,
}

export const CustomSize = Template.bind({})
CustomSize.args = {
  width: 250,
  height: 85,
}
