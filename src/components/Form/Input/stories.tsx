import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from '.'

export default {
  title: 'Form/Input',
  component: Input,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=612%3A118',
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'email'],
      },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <div className="flex max-w-[335px] flex-col">
    <Input {...args} />
  </div>
)

export const Text = Template.bind({})
export const Email = Template.bind({})

Text.args = {
  label: 'Nome',
  type: 'text',
  name: 'name',
}

Email.args = {
  label: 'Email',
  type: 'email',
  name: 'name',
  value: 'mail@bol.com.br',
}
