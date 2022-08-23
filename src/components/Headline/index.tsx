import getHeading from './helpers/getHeading'
import { HeadlineContainer, LineSizeStyle, LineStyle } from './styles'

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
  const classNames = `${LineStyle} ${LineSizeStyle[lineSize]} `
  return (
    <div className={HeadlineContainer}>
      {getHeading(as, title)}
      {withLine && <div data-testid="underline" className={classNames} />}
    </div>
  )
}
