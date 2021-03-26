import { GraphQLScalarType, Kind } from 'graphql'
import { isValid, isDate } from 'date-fns'

const isValidDateTime = (value: any) => {
  const isSerializable =
    isDate(value) || typeof value === 'string' || typeof value === 'number'

  return isSerializable ? isValid(new Date(value)) : false
}

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (isValidDateTime(value)) {
      return new Date(value).toISOString()
    }

    throw new TypeError(
      `DateTime can not be serialized from ${JSON.stringify(value)}`
    )
  },
  parseValue(value) {
    if (isValidDateTime(value)) {
      return new Date(value)
    }

    throw new TypeError(
      `DateTime can not be parsed from ${JSON.stringify(value)}`
    )
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new TypeError('DateTime cannot represent non string type')
    }

    const { value } = ast

    if (isValidDateTime(value)) {
      return new Date(value)
    }

    throw new TypeError(
      `DateTime can not be parsed from ${JSON.stringify(value)}`
    )
  }
})

export default { dateScalar }
