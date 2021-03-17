import express from 'express'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'

const app = express()

app.use(cors())
app.use(express.json())
app.use(compression())
app.use(helmet())

app.get('/api/bow', (_req, res) => {
  res.send('wow')
})

export default app
