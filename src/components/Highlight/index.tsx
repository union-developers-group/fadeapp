/* eslint-disable @next/next/no-img-element */
import {
  highlightContainerStyle,
  highlightLineStyle,
  imageContainerStyle,
  textContainerStyle,
  titleStyle,
  textStyle,
  imageStyle,
} from './styles'

export interface HighlightItemProps {
  id: string
  title: string
  text: string
  image: string
}

export interface HighlightProps {
  highlightItems: HighlightItemProps[]
  inverterOrder?: boolean
  withLine?: boolean
}

export const Highlight = ({
  highlightItems,
  inverterOrder,
  withLine,
}: HighlightProps) => {
  let classNamesHighlightContainer = highlightContainerStyle

  inverterOrder
    ? (classNamesHighlightContainer += `lg:odd:flex-row-reverse 
        ${withLine ? highlightLineStyle['left'] : ''} `)
    : (classNamesHighlightContainer += `lg:even:flex-row-reverse 
        ${withLine ? highlightLineStyle['right'] : ''} `)

  withLine &&
    (classNamesHighlightContainer += `${highlightLineStyle['defaultStyle']} `)

  return (
    <>
      {highlightItems.map((items: HighlightItemProps) => {
        const { id, title, text, image } = items
        return (
          <div key={id} className={classNamesHighlightContainer}>
            <div className={textContainerStyle}>
              <h3 className={titleStyle}>{title}</h3>
              <p className={textStyle}>{text}</p>
            </div>
            <div className={imageContainerStyle}>
              <img className={imageStyle} src={image} alt={title} />
            </div>
          </div>
        )
      })}
    </>
  )
}
