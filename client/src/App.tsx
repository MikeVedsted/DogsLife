import React, { useState, useEffect, FormEventHandler } from 'react'
import { useQuery, useMutation } from '@apollo/client'

import { ALL_DOGS } from './queries'
import { ADD_DOG } from './mutations'
import './App.css'

function App() {
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<any>('')
  const { loading, data } = useQuery(ALL_DOGS)
  const [addDog] = useMutation(ADD_DOG, {
      refetchQueries: [{ query: ALL_DOGS }],
      onError: (error) => {
        console.log(error)
    //     setError(error.graphQLErrors[0].message)
      }
  })

  useEffect(() => {
    console.log('current: ', loading, data)
    if (!loading) {
      console.log(data.allDogs)
    }
  }, [loading, data])

  if (loading) {
    return <p>Loading...</p>
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(name)
    addDog({ variables: { name }})
    setName('')
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
          <input placeholder='Add a dog' onChange={({target}) => setName(target.value) } value={name} />
          <button>Submit</button>
        </form>
        {/* {error &&  <p>{}</p>} */}
      </header>
    </div>
  )
}

export default App
