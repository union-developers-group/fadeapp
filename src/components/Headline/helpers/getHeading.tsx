import { HeadlineTitle } from '../styles'

export default function getHeading(as: string, title: string) {
  const classNames = `${HeadlineTitle}} `
  switch (as) {
    case 'h1':
      //prettier-ignore
      return <h1 className={classNames}>{title}</h1>
    case 'h2':
      //prettier-ignore
      return <h2 className={classNames}>{title}</h2>
    case 'h3':
      //prettier-ignore
      return <h3 className={classNames}>{title}</h3>
    case 'h4':
      //prettier-ignore
      return <h4 className={classNames}>{title}</h4>
    case 'h5':
      //prettier-ignore
      return <h5 className={classNames}>{title}</h5>
    case 'h6':
      //prettier-ignore
      return <h6 className={classNames}>{title}</h6>
  }
}
