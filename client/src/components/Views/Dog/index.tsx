import { Link, useParams } from 'react-router-dom'
import { useApolloClient } from '@apollo/client'

import { MY_DOGS } from '../../../gql/queries'
import { MyDogsCache, Dog } from '../../../types'
import useInput from '../../../hooks/useInput'
import { React } from '@ungap/global-this'

const DogView = () => {
  const { dogId } = useParams<{ dogId: string }>()
  const client = useApolloClient()
  const activityTime = useInput('number')

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
  
  const submitActivity = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(activityTime.value)
  }

  return (
    <div>
      <h2>{currentDog.name}</h2>
      <h2>(id: {currentDog.id})</h2>
      <p>Birthday: {dob}</p>
      <Link to={`/dog/${dogId}/calendar`}>go to calendar</Link>
      <p>Add activity:</p>
      <form onSubmit={submitActivity}>
        <input {...activityTime} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default DogView
