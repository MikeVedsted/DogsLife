import Dog, { DogDocument } from '../../models/Dog'

const resolvers = {
  Query: {
    allDogs: () => {
      return Dog.find({})
    }
  },
  Mutation: {
    addDog: async (_root: unknown, args: Partial<DogDocument>): Promise<DogDocument> => {
      const newDog = new Dog({  name: args.name  })
      return await newDog.save()
    }
  }
}

export default resolvers
