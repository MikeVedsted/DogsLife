import { gql } from '@apollo/client'

export const ALL_DOGS = gql`
  query AllDogs {
    allDogs {
      name
      id
    }
  }
`
