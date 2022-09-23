import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FormModal } from '.'

export default {
  title: 'Form/FormModal',
  component: FormModal,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=896%3A71',
    },
  },
} as ComponentMeta<typeof FormModal>

const Template: ComponentStory<typeof FormModal> = () => <FormModal />

export const Default = Template.bind({})
Default.args = {}
