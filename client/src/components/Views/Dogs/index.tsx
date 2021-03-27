import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'

import useInput from '../../../hooks/useInput'
import { MY_DOGS } from '../../../gql/queries'
import { ADD_DOG } from '../../../gql/mutations'
import { Dog } from '../../../types'

const Dogs = () => {
  const name = useInput('text')
  const dob = useInput('date')
  const { loading, data } = useQuery(MY_DOGS)

  const [addDog] = useMutation(ADD_DOG, {
    refetchQueries: [{ query: MY_DOGS }]
  })

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    try {
      await addDog({ variables: { name: name.value, dob: dob.value } })
    } catch ({ message }) {
      console.log(message)
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {data &&
        data.dogs.map((dog: Dog) => (
          <Link key={dog.id} to={`/dog/${dog.id}`}>
            <p>{dog.name}</p>
          </Link>
        ))}
      <h2>Add a dog</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Add a dog' {...name} />
        <input {...dob} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Dogs
