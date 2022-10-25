import Image from 'next/image'

import {
  messageStyle,
  photoContainerStyle,
  nameStyle,
  testimonialCardStyle,
} from './styles'

export interface TestimonialCardProps {
  id?: string
  name: string
  message: string
  image: string | StaticImageData
}

export const TestimonialCard = ({
  name,
  message,
  image,
}: TestimonialCardProps) => {
  return (
    <div className={testimonialCardStyle}>
      <div>
        <h3 className={nameStyle}>{name}</h3>
        <p className={messageStyle}>{message}</p>
      </div>
      <div className={photoContainerStyle}>
        <Image
          placeholder="blur"
          blurDataURL="https://image-component.nextjs.gallery/placeholder"
          alt={name}
          src={image}
          layout="fill"
          className="rounded-10"
        />
      </div>
    </div>
  )
}
