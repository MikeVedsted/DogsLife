import { useState } from 'react'
import { useMutation } from '@apollo/client'

import useInput from '../../../hooks/useInput'
import { SIGN_UP } from '../../../gql/mutations'

const SignUpForm = () => {
  const [mutate] = useMutation(SIGN_UP)
  const [notification, setNotification] = useState('')
  const name = useInput('text')
  const email = useInput('email')
  const password = useInput('password')
  const passwordRepeated = useInput('password')

  const submitSignUp = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      await mutate({ variables: { name: name.value, email: email.value, password: password.value } })
      setNotification('Thank you! You can now log in with your credentials.')
    } catch ({ message }) {
      setNotification(message)
    }
  }

  return (
    <form onSubmit={submitSignUp}>
      <label>
        Name
        <input {...name} />
      </label>
      <label>
        Email
        <input {...email} />
      </label>
      <label>
        Password
        <input {...password} />
      </label>
      <label>
        Repeat password
        <input {...passwordRepeated} />
      </label>
      <button>Sign up</button>
      {notification && <p>{notification}</p>}
    </form>
  )
}

export default SignUpForm
