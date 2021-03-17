import mongoose from 'mongoose'

export type DogDocument = Document & {
  name: string
}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

export default mongoose.model('Dog', schema)
