import getHeading from './helpers/getHeading'
import { LineSizeStyle, LineStyle } from './styles'

export interface HeadlineProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title: string
  lineSize?: 'small' | 'medium' | 'large'
  withLine?: boolean
}

export const Headline = ({
  title,
  withLine = false,
  as = 'h2',
  lineSize = 'large',
}: HeadlineProps) => {
  const classNames = `${LineStyle} ${LineSizeStyle[lineSize]} `
  return (
    <div className="relative">
      {getHeading(as, title)}
      {withLine && <div data-testid="underline" className={classNames} />}
    </div>
  )
}
