import { useRef } from 'react'

import { Button, TextInput } from '@goorm-dev/vapor-core'
import { SearchOutlineIcon } from '@goorm-dev/vapor-icons'

import { useCounter } from '../store/useCounter'

const Home = () => {
  const { count, increase } = useCounter()
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div ref={ref} role="dialog">
        <p className="text-red">Count: {count}</p>

        <Button color="primary" onClick={increase}>
          Increase
          <SearchOutlineIcon />
        </Button>
        <TextInput type="text" placeholder="Enter your name" />
      </div>
    </div>
  )
}

export default Home
