import { Document, Schema, model } from 'mongoose'
import { DogDocument } from './Dog'

export type UserDocument = Document & {
  name: string
  email: string
  passwordHash: string
  dogs: Array<DogDocument>
}

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String
  },
  dogs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Dog'
    }
  ]
})

export default model<UserDocument>('User', schema)
