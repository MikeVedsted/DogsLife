import { gql } from '@apollo/client'

export const ADD_DOG = gql`
  mutation AddDog($name: String!) {
    addDog(name: $name) {
      name
      id
    }
  }
`
export const LOGIN = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      value
    }
  }
`