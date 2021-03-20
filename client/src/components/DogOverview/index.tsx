import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'

import { ALL_DOGS } from '../../queries'
import { ADD_DOG } from '../../mutations'

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
    <div className="App">
      <header className="App-header">
        {data &&
          data.allDogs.map((dog: { name: string; id: string }) => (
            <p>{dog.name}</p>
          ))}
        <h2>Add a dog</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Add a dog"
            onChange={({ target }) => setName(target.value)}
            value={name}
          />
          <button>Submit</button>
        </form>
      </header>
    </div>
  )
}

export default DogOverview
