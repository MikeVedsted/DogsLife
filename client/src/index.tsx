import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client'
// import { WebSocketLink } from '@apollo/client/link/ws'
import { setContext } from '@apollo/client/link/context'
// import { getMainDefinition } from '@apollo/client/utilities'
import AuthStorage from './util/AuthStorage'
import AuthContext from './contexts/AuthContext'

import './index.css'
import App from './App'

const httpLink = new HttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = AuthStorage.getAccessToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:8080/graphql`,
//   options: {
//     reconnect: true
//   }
// })

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query)
//     return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
//   },
//   // wsLink,
//   authLink.concat(httpLink)
// )

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // link: splitLink
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ token: AuthStorage.getAccessToken() }}>
        <Router>
          <App />
        </Router>
      </AuthContext.Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
