import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ApolloError, UserInputError } from 'apollo-server-errors'
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
    },
    dogs: async (
      _: any,
      args: { id?: string },
      context: { currentUser: UserDocument }
    ): Promise<DogDocument | Array<DogDocument> | null> => {
      if (args && args.id) {
        return await Dog.findById(args.id)
      }
      const user = await User.findById(context.currentUser._id).populate('dogs')

      if (!user) {
        throw new ApolloError('Something went wrong.. Please try again.', '500')
      }
      return null
    }
  },

  Mutation: {
    addDog: async (
      _root: unknown,
      args: { name: string },
      context: { currentUser: UserDocument }
    ): Promise<DogDocument> => {
      const user = await User.findById(context.currentUser.id)

      if (!user) {
        throw new ApolloError('Something went wrong.. Please try again.', '500')
      }

      const newDog: DogDocument = new Dog({ name: args.name })
      const savedDog: DogDocument = await newDog.save()
      user.dogs = user.dogs.concat(savedDog)
      await user.save()
      return savedDog
    },
    createUser: async (
      _root: unknown,
      args: { name: string; email: string; password: string }
    ): Promise<UserDocument> => {
      const existingUser: UserDocument | null = await User.findOne({
        email: args.email
      })

      if (existingUser) {
        throw new UserInputError(
          'A user with this email is already registered.'
        )
      }

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
