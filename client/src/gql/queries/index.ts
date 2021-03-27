import { gql } from '@apollo/client'

export const MY_DOGS = gql`
  query MyDogs {
    dogs {
      name
      id
      dob
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