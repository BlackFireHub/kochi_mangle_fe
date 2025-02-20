import { useCounter } from '../store/useCounter'

const Home = () => {
  const { count, increase } = useCounter()
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-red">Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Home
