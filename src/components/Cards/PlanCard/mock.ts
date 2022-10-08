import { PlanCardProps } from '.'

export const plansMock = [
  {
    planType: 'Semanal',
    price: 9.99,
    image:
      'https://res.cloudinary.com/dbnq26wqe/image/upload/v1663434200/others/image_2_mgwhkt.jpg',
    buttonText: 'Assine',
  },
  {
    planType: 'Mensal',
    price: 22.99,
    haveOffer: true,
    equivalentValue: 5.75,
    offer: 54,
    image:
      'https://res.cloudinary.com/dbnq26wqe/image/upload/v1663434200/others/image_3_zuude8.jpg',
    buttonText: 'Assine',
  },
  {
    planType: 'Anual',
    price: 239.88,
    haveOffer: true,
    offer: 13,
    equivalentValue: 19.99,
    image:
      'https://res.cloudinary.com/dbnq26wqe/image/upload/v1663434202/others/image_4_fcsoit.jpg',
    buttonText: 'Assine',
  },
] as PlanCardProps[]
