import { Link, useParams } from 'react-router-dom'
import { useApolloClient } from '@apollo/client'
import { ALL_DOGS } from '../../../gql/queries'
import { AllDogsCache, Dog } from '../../../types'

const DogView = () => {
  const { dogId } = useParams<{ dogId: string }>()
  const client = useApolloClient()

  const cachedData: AllDogsCache | null = client.readQuery({ query: ALL_DOGS })

  if (cachedData === null) {
    return (
      <>
        <p>Something went wrong...</p>
        <p>Please try again.</p>
      </>
    )
  }
  const currentDog: Dog = cachedData.allDogs.filter((dog: Dog) => dog.id === dogId)[0]

  return (
    <div>
      <h2>{currentDog.name}</h2>
      <h2>(id: {currentDog.id})</h2>
      <Link to={`/dog/${dogId}/calendar`}>go to calendar</Link>
    </div>
  )
}

export default DogView
