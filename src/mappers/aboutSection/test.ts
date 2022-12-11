import { AboutProps } from "types/graphql"
import { aboutMapper } from "."

const about = [
  {
    background: {
      url: 'https://site.com/user/image/upload/image.png',
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
] as AboutProps[]

describe('aboutMapper', () => {
  it('should return the right format when mapped', () => {
    expect(aboutMapper(about)).toStrictEqual(
      {
        background: 'https://site.com/user/image/upload/image.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    )
  })
})