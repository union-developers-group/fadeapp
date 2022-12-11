import { TestimonialCardProps } from "types/graphql"
import { testimonialsMapper } from "."

const testimonials = [
  {
    id: '0',
    name: 'name 1',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: {
      url: 'https://site.com/user/image/upload/image-1.png',
    }
  },
  {
    id: '1',
    name: 'name 2',
    message: 'Nisl purus in mollis nunc. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam',
    image: {
      url: 'https://site.com/user/image/upload/image-2.png',
    }
  },
  {
    id: '2',
    name: 'name 3',
    message: 'Et netus et malesuada fames ac turpis egestas sed. Pharetra pharetra massa massa ultricies mi. Fermentum dui faucibus in ornare quam viverra orci sagittis.',
    image: {
      url: 'https://site.com/user/image/upload/image-3.png',
    }
  },
] as TestimonialCardProps[]

describe('testimonialsMapper', () => {
  it('should return the right format when mapped', () => {
    expect(testimonialsMapper(testimonials)).toStrictEqual([
      {
        id: '0',
        name: 'name 1',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://site.com/user/image/upload/image-1.png',
      },
      {
        id: '1',
        name: 'name 2',
        message: 'Nisl purus in mollis nunc. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam',
        image: 'https://site.com/user/image/upload/image-2.png',
      },
      {
        id: '2',
        name: 'name 3',
        message: 'Et netus et malesuada fames ac turpis egestas sed. Pharetra pharetra massa massa ultricies mi. Fermentum dui faucibus in ornare quam viverra orci sagittis.',
        image: 'https://site.com/user/image/upload/image-3.png',
      },
    ])
  })
})
