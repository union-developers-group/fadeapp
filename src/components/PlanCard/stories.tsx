import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PlanCard } from '.'
import { plans } from './mock'

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
  image: plans[0].image,
  planType: plans[0].planType,
  price: plans[0].price,
  buttonText: plans[0].buttonText,
}

export const WithOffer = Template.bind({})
WithOffer.args = {
  image: plans[1].image,
  planType: plans[1].planType,
  price: plans[1].price,
  offer: plans[1].offer,
  equivalentValue: plans[1].equivalentValue,
  haveOffer: plans[1].haveOffer,
  buttonText: plans[1].buttonText,
}
