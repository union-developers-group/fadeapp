import { HeroProps } from "types/graphql"
import { heroMapper } from "."

const hero = [
  {
    title: 'Title 1',
    subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    textButton: 'Text Button',
    tryText: 'Lorem ipsum dolor sit amet.',
    image: {
      url: 'https://site.com/user/image/upload/image.png',
    }
  },
] as HeroProps[]

describe('heroMapper', () => {
  it('should return the right format when mapped', () => {
    expect(heroMapper(hero)).toStrictEqual(
      {
        headlineTitle: 'Title 1',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        textButton: 'Text Button',
        tryText: 'Lorem ipsum dolor sit amet.',
        image: 'https://site.com/user/image/upload/image.png',
      }
    )
  })
})