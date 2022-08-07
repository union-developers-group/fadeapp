import { LineStyle } from './styles'
import getHeading from './getHeading'

export interface HeadlineProps {
  as?: string
  title: string
  withLine?: boolean
}

export const Headline = ({ title, withLine, as }: HeadlineProps) => {
  return (
    <div role="heading" data-testid="Headline">
      {getHeading(as!, title)}
      {withLine && <div data-testid="underline" className={LineStyle}></div>}
    </div>
  )
}
