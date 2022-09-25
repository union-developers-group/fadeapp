import { ComponentMeta, ComponentStory } from '@storybook/react'
import { socialMock } from 'components/ButtonSocial/mock'
import { Footer } from '.'

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=905%3A41',
    },
  },
  args: {
    items: socialMock,
    title: 'Nos acompanhe nas nossas redes',
    company: 'Union Group',
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {}
