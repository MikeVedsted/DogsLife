import { gql } from 'apollo-server-express'

const typeDefs = gql`
  scalar Date

  type User {
    name: String!
    email: String!
    passwordHash: String!
    id: ID!
  }

  type Token {
    value: String!
  }

  type Dog {
    name: String!
    dob: Date!
    id: ID!
  }

  type Query {
    allDogs: [Dog]
    dog(id: ID!): Dog
    allUsers: [User]
    me: User
    dogs(id: ID): [Dog]
  }

  type Mutation {
    addDog(name: String!, dob: Date!): Dog
    createUser(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Token
  }

  type Subscription {
    hello: String
  }
`

export default typeDefs