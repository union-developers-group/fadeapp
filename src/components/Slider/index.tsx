import { FreeMode, A11y } from 'swiper'
import { Swiper } from 'swiper/react'

import { swiperOptions } from './config'
import { TestimonialCardProps } from 'components/Cards/TestimonialCard'
import { SliderItemTemplate } from './templates/SliderItemTemplate'

import 'swiper/css'

import {
  Carousel,
  CarouselContainer,
  CarouselItem,
  CarouselSlide,
} from './styles'

interface SliderProps {
  data: TestimonialCardProps[]
}

export const Slider = ({ data }: SliderProps) => {
  return (
    <div className={CarouselContainer}>
      <div className={Carousel}>
        <div className={CarouselItem}>
          <Swiper
            className={CarouselSlide}
            freeMode
            grabCursor
            modules={[FreeMode, A11y]}
            breakpoints={swiperOptions.breakpoints}
          >
            {data?.map(SliderItemTemplate)}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
