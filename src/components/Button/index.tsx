import { ButtonHTMLAttributes } from 'react'

import { ButtonSize, buttonClasses } from './styles'

type BaseButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'className'
>

export interface ButtonProps extends BaseButtonProps {
  children: React.ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large'
}

export const Button = ({
  children,
  className,
  size = 'medium',
  ...props
}: ButtonProps) => {
  const classNames = `${buttonClasses} ${ButtonSize[size]} ${className ?? ''}`

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}
