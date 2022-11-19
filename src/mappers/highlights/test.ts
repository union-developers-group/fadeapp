import { HighlightProps } from "types/graphql"
import { highlightsMapper } from "."

const highlights = [
  {
    id: '0',
    title: 'Title 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: {
      url: 'https://site.com/user/image/upload/image-1.png',        
    }
  },
  {
    id: '1',
    title: 'Title 2',
    text: 'Nisl purus in mollis nunc. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.',
    image: {
      url: 'https://site.com/user/image/upload/image-2.png',
    }
  },
  {
    id: '2',
    title: 'Title 3',
    text: 'Et netus et malesuada fames ac turpis egestas sed. Pharetra pharetra massa massa ultricies mi. Fermentum dui faucibus in ornare quam viverra orci sagittis.',
    image: {
      url: 'https://site.com/user/image/upload/image-3.png',
    }
  },
] as HighlightProps[]

describe('highlightsMapper', () => {
  it('should return the right format when mapped', () => {

    expect(highlightsMapper(highlights)).toStrictEqual([
      {
        id: '0',
        title: 'Title 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image:
          'https://site.com/user/image/upload/image-1.png',
      },
      {
        id: '1',
        title: 'Title 2',
        text: 'Nisl purus in mollis nunc. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.',
        image:
        'https://site.com/user/image/upload/image-2.png',
      },
      {
        id: '2',
        title: 'Title 3',
        text: 'Et netus et malesuada fames ac turpis egestas sed. Pharetra pharetra massa massa ultricies mi. Fermentum dui faucibus in ornare quam viverra orci sagittis.',
        image:
        'https://site.com/user/image/upload/image-3.png',
      },
    ])
  })
})