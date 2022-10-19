import { SwiperSlide } from 'swiper/react'

import {
  TestimonialCard,
  TestimonialCardProps,
} from 'components/Cards/TestimonialCard'

export const SliderItemTemplate = (SliderItem: TestimonialCardProps) => {
  const { id, name, message, image } = SliderItem
  return (
    <SwiperSlide className="inline-block h-full" key={id}>
      <TestimonialCard name={name} message={message} image={image} />
    </SwiperSlide>
  )
}
