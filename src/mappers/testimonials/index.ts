import { TestimonialCardProps } from "types/graphql"

export const testimonialsMapper = (testimonials: TestimonialCardProps[]) => {
  return testimonials.map((testimonialCard) => ({
    id: testimonialCard.id,
    name: testimonialCard.name,
    message: testimonialCard.message,
    image: testimonialCard.image.url,
  }))
}
