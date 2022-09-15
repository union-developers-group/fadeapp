import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonSocial } from '.'

export default {
  title: 'Components/ButtonSocial',
  component: ButtonSocial,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=608%3A229',
    },
  },
  args: {
    text: 'instagram',
    urlIcon:
      'https://res.cloudinary.com/devjoseronaldo/image/upload/v1663340757/fadeapp/instagram_icon.svg',
    urlRedirect: 'https://instagram.com/',
  },
} as ComponentMeta<typeof ButtonSocial>

const Template: ComponentStory<typeof ButtonSocial> = (args) => (
  <ButtonSocial {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const Instagram = Template.bind({})
Instagram.args = {}

export const Youtube = Template.bind({})
Youtube.args = {
  text: 'youtube',
  urlIcon:
    'https://res.cloudinary.com/devjoseronaldo/image/upload/v1663341139/fadeapp/youtube_icon.svg',
  urlRedirect: 'https://www.youtube.com/',
}

export const TikTok = Template.bind({})
TikTok.args = {
  text: 'tiktok',
  urlIcon:
    'https://res.cloudinary.com/devjoseronaldo/image/upload/v1663341172/fadeapp/tiktok_icon.svg',
  urlRedirect: 'https://tiktok.com/',
}
