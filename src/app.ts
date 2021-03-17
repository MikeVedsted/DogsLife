import express, { Request, Response } from 'express'
import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import mongoose from 'mongoose'
import helmet from 'helmet'
import cors from 'cors'

import { typeDefs, resolvers } from './gql'
import config from '../util/config'

const app = express()
const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.set('port', config.PORT || 5000)
app.use(express.json())
app.use(compression())
app.use(helmet())
app.use(cors())

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error: Error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.get('/api/bow', (_req, res) => {
  res.send('wow')
})

const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: 'Unknown endpoint' })
}

app.use(unknownEndpoint)

export default app
