import { PlanSectionProps } from "types/graphql"
import { planSectionMapper } from "."

const planSection = [{
  tryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  plans: [
    {
      plan: 'Semanal',
      price: 9.99,
      image: {
        url: 'https://site.com/user/image/upload/image-1.png',
      },    
      buttonText: 'ButtonText',
    },
    {
      plan: 'Mensal',
      price: 22.99,
      promotional: true,
      equivalentValue: 5.75,
      promotionalPrice: 54,
      image: {
        url: 'https://site.com/user/image/upload/image-2.png',
      },       
      buttonText: 'ButtonText',
    },
    {
      plan: 'Anual',
      price: 239.88,
      promotional: true,
      promotionalPrice: 13,
      equivalentValue: 19.99,
      image: {
        url: 'https://site.com/user/image/upload/image-3.png',
      },        
      buttonText: 'ButtonText',
    },
  ]
}] as PlanSectionProps[]

describe('planSectionMapper', () => {
  it('should return the right format when mapped', () => {
    expect(planSectionMapper(planSection)).toStrictEqual({
      tryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      plans: [
        {
          planType: 'Semanal',
          price: 9.99,
          haveOffer: undefined,
          equivalentValue: undefined,
          offer: undefined,
          image: 'https://site.com/user/image/upload/image-1.png',    
          buttonText: 'ButtonText',
        },
        {
          planType: 'Mensal',
          price: 22.99,
          haveOffer: true,
          equivalentValue: 5.75,
          offer: 54,
          image: 'https://site.com/user/image/upload/image-2.png',      
          buttonText: 'ButtonText',
        },
        {
          planType: 'Anual',
          price: 239.88,
          haveOffer: true,
          offer: 13,
          equivalentValue: 19.99,
          image: 'https://site.com/user/image/upload/image-3.png',       
          buttonText: 'ButtonText',
        },
      ]
    })
  })
})
