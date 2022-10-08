import { HighlightItemTemplate } from './templates/HighlightItemTemplate'

export interface HighlightItemProps {
  id: string
  title: string
  text: string
  image: string
}

export interface HighlightProps {
  items: HighlightItemProps[]
}

export const Highlight = ({ items }: HighlightProps) => {
  return <>{items.map(HighlightItemTemplate)}</>
}
