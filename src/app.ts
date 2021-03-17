import express, { Request, Response } from 'express'
import compression from 'compression'
import mongoose from 'mongoose'
import helmet from 'helmet'
import cors from 'cors'

import config from '../util/config'

const app = express()

const MONGODB_URI = config.MONGODB_URI
const PORT = config.PORT

app.set('port', PORT || 5000)
app.use(express.json())
app.use(compression())
app.use(helmet())
app.use(cors())

mongoose
  .connect(MONGODB_URI, {
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

app.set('port', process.env.PORT || 5000)

const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

export default app
