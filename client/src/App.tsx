import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { ALL_DOGS } from './queries'
import './App.css'

function App() {
  const { loading, data } = useQuery(ALL_DOGS)

  useEffect(() => {
    console.log('current: ', loading, data)
  }, [loading, data])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data && data.allDogs.map((dog: {name: string, id: string}) => (
          <p>{dog.name}</p>
        ))}
      </header>
    </div>
  )
}

export default App
