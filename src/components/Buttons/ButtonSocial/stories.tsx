import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ButtonSocial } from '.'
import { socialMock } from './mock'

export default {
  title: 'Components/ButtonSocial',
  component: ButtonSocial,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=608%3A229',
    },
  },
  args: {
    name: socialMock[0].name,
    urlIcon: socialMock[0].urlIcon,
    urlRedirect: socialMock[0].urlRedirect,
  },
} as ComponentMeta<typeof ButtonSocial>

const Template: ComponentStory<typeof ButtonSocial> = (args) => (
  <ButtonSocial {...args} />
)

export const Default = Template.bind({})
Default.args = {}
