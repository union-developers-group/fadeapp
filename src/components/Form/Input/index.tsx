import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

import { containerStyle, inputStyle, labelStyle } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export const Input = ({ label, value, name, ...rest }: InputProps) => {
  const [data, setData] = useState(value)
  const [animate, setAnimate] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.currentTarget.value)
  }

  return (
    <div className={containerStyle}>
      <input
        {...rest}
        autoComplete="off"
        className={inputStyle}
        id={name}
        name={name}
        value={data}
        onFocus={() => setAnimate(true)}
        onBlur={() => (data ? setAnimate(true) : setAnimate(false))}
        onChange={onChange}
      />
      <label
        className={`
            ${labelStyle}
            ${
              animate || data
                ? 'top-[-0.215rem] text-[0.75rem] leading-[0.875rem]'
                : 'top-1 text-[1.125rem] leading-[1.3125rem]'
            }
          `}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  )
}
