import Image from 'next/image'

import { messageStyle, photoContainerStyle, nameStyle, testimonialCardStyle } from "./styles"

export interface TestimonialCardProps {
  name: string
  message: string
  image: string | StaticImageData
}

export const TestimonialCard = ({ name, message, image }: TestimonialCardProps) => {
  return (
    <div className={testimonialCardStyle}>
      <h3 className={nameStyle}>
        {name}
      </h3>
      <p className={messageStyle}>
        {message}
      </p>
      <div className={photoContainerStyle}>
        <Image alt={name} src={image} layout="fill" className="rounded-10" />
      </div>
    </div>
  )
}