import express, { Request, Response } from 'express'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'

const app = express()

app.set('port', process.env.PORT || 5000)
app.use(cors())
app.use(express.json())
app.use(compression())
app.use(helmet())

app.get('/api/bow', (_req, res) => {
  res.send('wow')
})

app.set('port', process.env.PORT || 5000)

const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

export default app
