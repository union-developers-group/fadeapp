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
  position?: 'left' | 'center'
  withLine?: boolean
}

export const Headline = ({
  title,
  withLine = false,
  as = 'h2',
  lineSize = 'medium',
  position = 'left',
}: HeadlineProps) => {
  const classNames = `${LineStyle} ${LineSizeStyle[lineSize]}}  `

  const lineSizeStyle =
    lineSize === 'medium' ? HeadlineContainerMin : HeadlineContainerMax

  return (
    <div
      className={
        HeadlineContainer + lineSizeStyle + TextPositionStyle[position]
      }
    >
      {getHeading(as, title)}
      {withLine && <div data-testid="underline" className={classNames} />}
    </div>
  )
}
