import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PlanCard } from '.'
import { plansMock } from './mock'

export default {
  title: 'Components/PlanCard',
  component: PlanCard,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=608%3A228',
    },
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof PlanCard>

const Template: ComponentStory<typeof PlanCard> = (args) => (
  <PlanCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  image: plansMock[0].image,
  planType: plansMock[0].planType,
  price: plansMock[0].price,
  buttonText: plansMock[0].buttonText,
}

export const WithOffer = Template.bind({})
WithOffer.args = {
  image: plansMock[1].image,
  planType: plansMock[1].planType,
  price: plansMock[1].price,
  offer: plansMock[1].offer,
  equivalentValue: plansMock[1].equivalentValue,
  haveOffer: plansMock[1].haveOffer,
  buttonText: plansMock[1].buttonText,
}
