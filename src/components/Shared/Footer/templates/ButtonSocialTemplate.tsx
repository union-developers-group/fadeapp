import {
  ButtonSocial,
  ButtonSocialProps,
} from 'components/Buttons/ButtonSocial'

export const ButtonSocialTemplate = (ButtonSocialItem: ButtonSocialProps) => {
  const { name, urlIcon, urlRedirect } = ButtonSocialItem
  return (
    <ButtonSocial
      key={name}
      name={name}
      urlIcon={urlIcon}
      urlRedirect={urlRedirect}
    />
  )
}
