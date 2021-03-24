import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserInputError } from 'apollo-server-errors'
import { PubSub } from 'apollo-server-express'

import config from '../../../util/config'
import Dog, { DogDocument } from '../../models/Dog'
import User, { UserDocument } from '../../models/user'

const pubsub = new PubSub()

type Token = {
  value: string
}

const resolvers = {
  Query: {
    allDogs: () => {
      return Dog.find({})
    },
    dog: async (_: any, args: { id: string }) => {
      return await Dog.findById(args.id)
    },
    allUsers: () => {
      return User.find({})
    },
    me: (_: any, __: any, context: { currentUser: UserDocument | null }) => {
      return context.currentUser
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
      args: { email: string; password: string; id: string }
    ): Promise<Token> => {
      const { email, password } = args

      if (!email || !password) {
        throw new UserInputError('Please provide both password and email.')
      }

      const user: UserDocument | null = await User.findOne({ email })

      const passwordCheck =
        user === null
          ? false
          : await bcrypt.compare(password, user?.passwordHash)

      if (!user || !passwordCheck) {
        throw new UserInputError('Invalid password and email combination.')
      }

      const tokenValues = {
        name: user.name,
        id: user._id as string
      }

      return { value: jwt.sign(tokenValues, config.JWT_SECRET) }
    }
  },

  Subscription: {
    hello: {
      subscribe: () => pubsub.asyncIterator(['hello'])
    }
  }
}

export default resolvers
