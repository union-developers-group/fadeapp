import { HeadlineTitle } from './styles'

export default function getHeading(as: string, title: string) {
  switch (as) {
    case 'h1':
      //prettier-ignore
      return <h1 className={HeadlineTitle}>{title}</h1>
    case 'h2':
      //prettier-ignore
      return <h2 className={HeadlineTitle}>{title}</h2>
    case 'h3':
      //prettier-ignore
      return <h3 className={HeadlineTitle}>{title}</h3>
    case 'h4':
      //prettier-ignore
      return <h4 className={HeadlineTitle}>{title}</h4>
    case 'h5':
      //prettier-ignore
      return <h5 className={HeadlineTitle}>{title}</h5>
    case 'h6':
      //prettier-ignore
      return <h6 className={HeadlineTitle}>{title}</h6>
  }
}
