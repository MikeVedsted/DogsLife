import { gql } from '@apollo/client'

export const ALL_DOGS = gql`
  query AllDogs {
    allDogs {
      name
      id
    }
  }
`

export const CHECK_AUTH = gql`
  query AuthCheck {
    me {
      id
      name
    }
  }
`