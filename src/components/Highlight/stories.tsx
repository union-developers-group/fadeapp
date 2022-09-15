import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Highlight } from '.'

export default {
  title: 'Components/Highlight',
  component: Highlight,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=164%3A16',
    },
  },
  args: {
    title: 'Treine com orientação',
    text: 'O fade app tornou possível conciliar as minhas viagens de trabalho com os meus treinos diário. Agora eu consigo treinar idependente do local em que eu esteja, sem gastar meus dados móveis.',
    image:
      'https://res.cloudinary.com/devjoseronaldo/image/upload/v1663089337/fadeapp/highlight1_ww2o69_b7fa61.png',
    inverterOrder: false,
    withLine: false,
  },
} as ComponentMeta<typeof Highlight>

const Template: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const WithLine = Template.bind({})
WithLine.args = {
  withLine: true,
}

export const WithLineAndInverterOrder = Template.bind({})
WithLineAndInverterOrder.args = {
  withLine: true,
  inverterOrder: true,
}

export const WithoutLine = Template.bind({})
WithoutLine.args = {}

export const WithoutLineAndInverterOrder = Template.bind({})
WithoutLineAndInverterOrder.args = {
  inverterOrder: true,
}
