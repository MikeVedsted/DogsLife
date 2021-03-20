import { useParams } from 'react-router-dom'
import { useQuery, useLazyQuery, useSubscription, useApolloClient, gql } from '@apollo/client';
import { ALL_DOGS } from '../../queries';

const Dog = () => {
  const { dogId }  = useParams<{ dogId: string }>();
  const client = useApolloClient()

  const cachedData = client.readQuery({ query: ALL_DOGS})
  const currentDog: {name: string, id: string} = cachedData.allDogs.filter((dog:  {name: string, id: string}) => dog.id === dogId)[0]
  
  return (
  <div>
    <h2>{currentDog.name}</h2>
    <h2>(id: {currentDog.id})</h2>
  </div>
  )
}

export default Dog
