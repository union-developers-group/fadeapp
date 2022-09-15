import {
  highlightContainerStyle,
  highlightLineStyle,
  imageContainerStyle,
  textContainerStyle,
  titleStyle,
  textStyle,
  imageStyle,
} from './styles'

export interface HighlightProps {
  title: string
  text: string
  image: string
  inverterOrder?: boolean
  withLine?: boolean
}

export const Highlight = ({
  title,
  text,
  image,
  inverterOrder = false,
  withLine = false,
}: HighlightProps) => {
  let classNamesHighlightContainer = highlightContainerStyle

  inverterOrder && (classNamesHighlightContainer += `lg:flex-row-reverse`)

  if (withLine) {
    classNamesHighlightContainer += ` ${highlightLineStyle['defaultStyle']} ${highlightLineStyle['right']}`
    inverterOrder &&
      (classNamesHighlightContainer += ` ${highlightLineStyle['left']}`)
  }

  return (
    <div
      data-testid="highlightContainer"
      className={classNamesHighlightContainer}
    >
      <div className={textContainerStyle}>
        <h3 className={titleStyle}>{title}</h3>
        <p className={textStyle}>{text}</p>
      </div>

      <div className={imageContainerStyle}>
        <img className={imageStyle} src={image} alt={title} />
      </div>
    </div>
  )
}
