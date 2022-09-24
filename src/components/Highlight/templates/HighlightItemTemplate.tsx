/* eslint-disable @next/next/no-img-element */
import { HighlightItemProps } from '..'

import {
  highlightContainerStyle,
  imageContainerStyle,
  imageStyle,
  textContainerStyle,
  textStyle,
  titleStyle,
} from '../styles'

export const HighlightItemTemplate = (HighlightItem: HighlightItemProps) => {
  const { id, title, text, image } = HighlightItem
  return (
    <div
      key={id}
      className={highlightContainerStyle}
      data-testid="highlight-container"
    >
      <div className={textContainerStyle}>
        <h2 className={titleStyle}>{title}</h2>
        <p className={textStyle}>{text}</p>
      </div>
      <div className={imageContainerStyle}>
        <img className={imageStyle} src={image} alt={title} />
      </div>
    </div>
  )
}
