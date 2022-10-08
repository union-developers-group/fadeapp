import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ChatbootModal } from '.'

export default {
  title: 'Components/ChatbootModal',
  component: ChatbootModal,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=890%3A70',
    },
  },
} as ComponentMeta<typeof ChatbootModal>

const Template: ComponentStory<typeof ChatbootModal> = () => <ChatbootModal />

export const Default = Template.bind({})
Default.args = {}
