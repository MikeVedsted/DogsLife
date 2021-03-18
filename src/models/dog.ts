import { Document, Schema, model } from 'mongoose'

export type DogDocument = Document & {
  name: string
}

const schema = new Schema({
  name: {
    type: String,
    required: true
  }
})

export default model<DogDocument>('Dog', schema)
