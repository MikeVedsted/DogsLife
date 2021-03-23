import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'

import { ALL_DOGS } from '../../../gql/queries'
import { ADD_DOG } from '../../../gql/mutations'

const DogOverview = () => {
  const [name, setName] = useState<string>('')
  const { loading, data } = useQuery(ALL_DOGS)

  const [addDog] = useMutation(ADD_DOG, {
    refetchQueries: [{ query: ALL_DOGS }]
  })

  const handleSubmit = (event: any) => {
    event.preventDefault()
    addDog({ variables: { name } })
    setName('')
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {data &&
        data.allDogs.map((dog: { name: string; id: string }) => (
          <Link key={dog.id} to={`/dog/${dog.id}`}>
            <p>{dog.name}</p>
          </Link>
        ))}
      <h2>Add a dog</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Add a dog' onChange={({ target }) => setName(target.value)} value={name} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default DogOverview
