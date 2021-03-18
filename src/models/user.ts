import { Document, Schema, model } from 'mongoose'

export type UserDocument = Document & {
  name: string
  email: string
  passwordHash: string
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
  }
})

export default model<UserDocument>('User', schema)
