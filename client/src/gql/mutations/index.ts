import { gql } from '@apollo/client'

export const ADD_DOG = gql`
  mutation AddDog($name: String!) {
    addDog(name: $name) {
      name
      id
    }
  }
`
