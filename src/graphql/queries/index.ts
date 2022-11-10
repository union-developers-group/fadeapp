import { gql } from '@apollo/client'

export const GET_MAIN = gql`
  query getMain {
    menus {
      name
      link
    }
  }
`
