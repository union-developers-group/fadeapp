import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ChatbootButton } from '.'

export default {
  title: 'Components/ChatbootButton',
  component: ChatbootButton,
   parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=608%3A133',
    },
  },
} as ComponentMeta<typeof ChatbootButton>

const Template: ComponentStory<typeof ChatbootButton> = () => (
  <ChatbootButton />
)

export const Default = Template.bind({})
