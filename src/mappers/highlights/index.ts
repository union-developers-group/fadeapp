import { HighlightProps } from "types/graphql"

export const highlightsMapper = (highlights: HighlightProps[]) => {
  return highlights.map((highlight) => ({
    id: highlight.id,
    title: highlight.title,
    text: highlight.text,
    image: highlight.image.url,
  }))
}
