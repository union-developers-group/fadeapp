import Image from 'next/image'
import {
  ButtonSocialContainerStyle,
  ImgBoxStyle,
  ImgStyle,
  TextStyle,
} from './styles'

export interface ButtonSocialProps {
  name: string
  urlIcon: string
  urlRedirect: string
}

export const ButtonSocial = ({
  name,
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
        <Image
          src={urlIcon}
          alt={name}
          className={ImgStyle}
          layout="fixed"
          width={38}
          height={38}
        />
      </a>
      <span className={TextStyle}>{name}</span>
    </div>
  )
}
