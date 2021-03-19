import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
require('express-async-errors')
import jwt from 'jsonwebtoken'
import helmet from 'helmet'
import cors from 'cors'

import User, { UserDocument } from './models/user'
import typeDefs from './gql/types'
import resolvers from './gql/resolvers'
import middleware from './middlewares'
import { connectDB } from '../util/db'
import config from '../util/config'

const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const token = auth.substring(7)
      const decodedToken = jwt.verify(
        token,
        config.JWT_SECRET
      ) as Partial<UserDocument>
      const currentUser = await User.findById(decodedToken.id)
      return { currentUser }
    }
    return null
  }
})

server.applyMiddleware({ app })

app.set('port', config.PORT || 5000)
app.use(express.json())
app.use(compression())
app.use(helmet())
app.use(cors())

connectDB().catch((e) => console.log(e))

app.get('/api/bow', (_req, res) => {
  res.send('wow')
})

app.use(middleware.unknownEndpoint)

export default app
