/* eslint-disable @next/next/no-img-element */
import {
  ButtonSocialContainerStyle,
  ImgBoxStyle,
  ImgStyle,
  TextStyle,
} from './styles'

export interface ButtonSocialProps {
  text: string
  urlIcon: string
  urlRedirect: string
}

export const ButtonSocial = ({
  text,
  urlIcon,
  urlRedirect,
}: ButtonSocialProps) => {
  return (
    <div className={ButtonSocialContainerStyle}>
      <a
        className={ImgBoxStyle}
        href={urlRedirect}
        target="_blank"
        rel="noreferrer"
      >
        <img src={urlIcon} alt={text} className={ImgStyle} />
      </a>
      <span className={TextStyle}>{text}</span>
    </div>
  )
}
