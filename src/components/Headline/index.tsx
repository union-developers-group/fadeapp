import { HeadlineContainer, HeadlineTitle, LineStyle } from './styles'

export interface HeadlineProps {
  title: string
  withLine?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
// mudar h1 AS
// storie
export const Headline = ({ title, withLine, as = 'h2' }: HeadlineProps) => {
  const classNames = `${LineStyle}`
  return (
    <div data-testid="Headline" className={HeadlineContainer}>
      <h2 className={HeadlineTitle}>{title}</h2>
      {withLine && <div data-testid="underline" className={classNames}></div>}
    </div>
  )
}
