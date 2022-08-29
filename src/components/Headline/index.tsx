import getHeading from './helpers/getHeading'
import {
  HeadlineContainer,
  HeadlineContainerMax,
  HeadlineContainerMin,
  LineSizeStyle,
  LineStyle,
  TextPositionStyle,
} from './styles'

export interface HeadlineProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title: string
  lineSize?: 'medium' | 'large'
  textPosition: 'left' | 'center'
  withLine?: boolean
}

export const Headline = ({
  title,
  withLine = false,
  as = 'h2',
  lineSize = 'medium',
  textPosition = 'center',
}: HeadlineProps) => {
  const classNames = `${LineStyle} ${LineSizeStyle[lineSize]}}  `

  const mid = lineSize === 'medium' ? HeadlineContainerMin : ''
  const larg = lineSize === 'large' ? HeadlineContainerMax : ''

  return (
    <div
      className={
        HeadlineContainer + mid + larg + TextPositionStyle[textPosition]
      }
    >
      {getHeading(as, title)}
      {withLine && <div data-testid="underline" className={classNames} />}
    </div>
  )
}