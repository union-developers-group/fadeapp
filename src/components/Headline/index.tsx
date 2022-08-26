import getHeading from './helpers/getHeading'
import {
  HeadlineContainer,
  HeadlineContainerMax,
  HeadlineContainerMin,
  LineSizeStyle,
  LineStyle,
  LineStyleLarg,
  LineStyleMid,
} from './styles'

export interface HeadlineProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title: string
  lineSize?: 'medium' | 'large'
  withLine?: boolean
}

export const Headline = ({
  title,
  withLine = false,
  as = 'h2',
  lineSize = 'medium',
}: HeadlineProps) => {
  const lineMid = lineSize === 'medium' ? LineStyleMid : ''
  const lineLarge = lineSize === 'large' ? LineStyleLarg : ''

  const classNames = `${LineStyle} ${LineSizeStyle[lineSize]} ${lineMid} ${lineLarge} `

  const mid = lineSize === 'medium' ? HeadlineContainerMin : ''
  const larg = lineSize === 'large' ? HeadlineContainerMax : ''

  return (
    <div className={HeadlineContainer + mid + larg}>
      {getHeading(as, title)}
      {withLine && <div data-testid="underline" className={classNames} />}
    </div>
  )
}