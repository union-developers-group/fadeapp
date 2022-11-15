import { SwiperSlide } from 'swiper/react'

import {
  TestimonialCard,
  TestimonialCardProps,
} from 'components/Cards/TestimonialCard'

import { CarouselTemplateStyle } from '../styles'

export const SliderItemTemplate = (SliderItem: TestimonialCardProps) => {
  const { id, name, message, image } = SliderItem
  return (
    <SwiperSlide className={CarouselTemplateStyle} key={id}>
      <TestimonialCard name={name} message={message} image={image} />
    </SwiperSlide>
  )
}
