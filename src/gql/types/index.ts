import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Dog {
    name: String!
  }

  type Query {
    allDogs: [Dog]
  }

  type Mutation {
    addDog(name: String!): Dog
  }
`

export default typeDefs