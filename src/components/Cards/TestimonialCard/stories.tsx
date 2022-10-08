import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TestimonialCard } from '.'
import { testimonialUsersMock } from './mock'

export default {
  title: 'Components/TestimonialCard',
  component: TestimonialCard,
   parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=617%3A98',
    },
  },
  args: {
    image: testimonialUsersMock[0].image,
    name: testimonialUsersMock[0].name,
    message: testimonialUsersMock[0].message,
  }
} as ComponentMeta<typeof TestimonialCard>

const Template: ComponentStory<typeof TestimonialCard> = (args) => (
  <TestimonialCard {...args}/>
)

export const Default = Template.bind({})