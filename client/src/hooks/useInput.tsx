import { useState, ChangeEvent } from 'react'

const useInput = (type: string) => {
  const [value, setValue] = useState<string>('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

export default useInput
