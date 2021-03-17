import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT as string
const MONGODB_URI = process.env.MONGODB_URI as string

export default { PORT, MONGODB_URI }
