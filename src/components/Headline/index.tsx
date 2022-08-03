import {
  HeadlineContainer,
  HeadlineTitle,
  LineStyle,
  LineWidth,
} from './styles'

export interface HeadlineProps {
  title: string
  variant?: 'small' | 'medium' | 'large'
  line?: boolean
}

export const Headline = ({ title, line, variant = 'large' }: HeadlineProps) => {
  const classNames = `${LineStyle} ${LineWidth[variant]} `
  return (
    <div data-testid="Headline" className={HeadlineContainer}>
      <h1 className={HeadlineTitle}>{title}</h1>
      {line && <div data-testid="underline" className={classNames}></div>}
    </div>
  )
}
