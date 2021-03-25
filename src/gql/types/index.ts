import { gql } from 'apollo-server-express'

const typeDefs = gql`
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
    id: ID!
  }

  type Query {
    allDogs: [Dog]
    dog(id: ID!): Dog
    allUsers: [User]
    me: User
    dogs(id: ID): Dog
  }

  type Mutation {
    addDog(name: String!): Dog
    createUser(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Token
  }

  type Subscription {
    hello: String
  }
`

export default typeDefs