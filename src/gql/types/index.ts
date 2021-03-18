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
          allUsers: [User]
          me: User
        }

        type Mutation {
          addDog(name: String!): Dog
          createUser(name: String!, email: String!, password: String!): User
          login(email: String!, password: String!): Token
        }
`

export default typeDefs