/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
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
  args: {
    isOpen: true,
    setIsOpen: () => {},
  },
} as ComponentMeta<typeof FormModal>

const Template: ComponentStory<typeof FormModal> = (args) => (
  <FormModal {...args} />
)

export const Default = Template.bind({})
Default.args = {}
