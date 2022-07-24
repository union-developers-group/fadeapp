import { SampleSize, SampleVariant, sampleClasses } from './styles'

export interface SampleProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'outline'
  children?: React.ReactNode
}

export const Sample = ({
  size = 'medium',
  variant = 'default',
  children,
}: SampleProps) => {
  const classNames = `${sampleClasses}  ${SampleVariant[variant]} ${SampleSize[size]}`

  return <button className={classNames}>{children}</button>
}
