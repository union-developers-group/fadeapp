import Image from 'next/image'
import { useState } from 'react'

import { useMediaQuery } from 'hooks/useMediaQuery'

import {
  TestimonialCard,
  TestimonialCardProps,
} from 'components/TestimonialCard'

import {
  ArrowContainer,
  Carousel,
  CarouselContainer,
  CarouselItem,
  CarouselSlide,
} from './styles'

interface SliderProps {
  data: TestimonialCardProps[]
}

export const Slider = ({ data }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const next = () => {
    const index = currentSlide < data.length - 1 ? currentSlide + 1 : 0

    setCurrentSlide(index)
  }

  const isMobile = useMediaQuery('(max-width: 400px)')
  const isTablet = useMediaQuery('(min-width: 768px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <div className={CarouselContainer}>
      <div onClick={next} className={ArrowContainer}>
        <Image
          className="text-zinc-500 opacity-[0.6]"
          src="/Vector2.svg"
          width={42}
          height={82}
          alt="Seta maior"
        />
        <Image
          width={28}
          height={57}
          className="text-zinc-500 opacity-[0.6] "
          src="/Vector.svg"
          alt="Seta menor"
        />
      </div>
      <div className={Carousel}>
        <div className={CarouselItem}>
          <div
            onMouseDown={next}
            className={CarouselSlide}
            draggable
            style={{
              transform: `translateX(${
                -currentSlide *
                (isTablet && !isDesktop ? 80 : isMobile ? 112 : 75)
              }%)`,
            }}
          >
            {data?.map((slide, index) => (
              <div className="inline-block h-full" key={index}>
                <TestimonialCard
                  name={slide.name}
                  message={slide.message}
                  image={slide.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
