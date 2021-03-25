import mongoose from 'mongoose'
import config from '../util/config'

const connectionConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

export const connectDB = async (): Promise<void> => {
  await mongoose.connect(config.MONGODB_URI, connectionConfig)
  console.log('Connected to MongoDB!')
}

export default { connectDB }