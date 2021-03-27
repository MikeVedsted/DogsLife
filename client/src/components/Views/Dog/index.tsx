import { Link, useParams } from 'react-router-dom'
import { useApolloClient } from '@apollo/client'

import { MY_DOGS } from '../../../gql/queries'
import { MyDogsCache, Dog } from '../../../types'

const DogView = () => {
  const { dogId } = useParams<{ dogId: string }>()
  const client = useApolloClient()

  const cachedData: MyDogsCache | null = client.readQuery({ query: MY_DOGS })

  if (cachedData === null) {
    return (
      <>
        <p>Something went wrong...</p>
        <p>Please try again.</p>
      </>
    )
  }
  
  const currentDog: Dog = cachedData.dogs.filter((dog: Dog) => dog.id === dogId)[0]
  const dob = new Date(currentDog.dob).toDateString().substring(4)
  
  return (
    <div>
      <h2>{currentDog.name}</h2>
      <h2>(id: {currentDog.id})</h2>
      <p>Birthday: {dob}</p>
      <Link to={`/dog/${dogId}/calendar`}>go to calendar</Link>
    </div>
  )
}

export default DogView
