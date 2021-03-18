import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserInputError } from 'apollo-server-errors'

import config from '../../../util/config'
import Dog, { DogDocument } from '../../models/Dog'
import User, { UserDocument } from '../../models/user'

type Token = {
  value: string
}

const resolvers = {
  Query: {
    allDogs: () => {
      return Dog.find({})
    },
    allUsers: () => {
      return User.find({})
    }
  },
  Mutation: {
    addDog: async (
      _root: unknown,
      args: Pick<DogDocument, 'name'>
    ): Promise<DogDocument> => {
      const newDog = new Dog({ name: args.name })
      return await newDog.save()
    },
    createUser: async (
      _root: unknown,
      args: { name: string; email: string; password: string }
    ): Promise<UserDocument> => {
      const saltRounds = 10
      const passwordHash = await bcrypt.hash(args.password, saltRounds)

      const newUser = new User({
        name: args.name,
        email: args.email,
        passwordHash
      })
      return await newUser.save()
    },
    login: async (
      _root: unknown,
      args: { email: string; password: string }
    ): Promise<Token> => {
      const { email, password } = args

      if (!email || !password) {
        throw new UserInputError('Please provide both password and email.')
      }

      const user = await User.findOne({ email: args.email })

      const passwordCheck =
        user === null
          ? false
          : await bcrypt.compare(password, user?.passwordHash)

      if (!user || !passwordCheck) {
        throw new UserInputError('Invalid password and email combination.')
      }

      const tokenValues = {
        name: user.name,
        email: user.email
      }

      return { value: jwt.sign(tokenValues, config.JWT_SECRET) }
    }
  }
}

export default resolvers
