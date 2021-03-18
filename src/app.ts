import express, { Request, Response } from 'express'
import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'

import typeDefs from './gql/types'
import resolvers from './gql/resolvers'
import { connectDB } from '../util/db'
import config from '../util/config'

const app = express()
const server = new ApolloServer({ typeDefs, resolvers })

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

const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: 'Unknown endpoint' })
}

app.use(unknownEndpoint)

export default app
