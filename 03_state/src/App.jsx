import { useState } from "react"
import UserProfile from "./UserProfile"
import Todo from "./Todo"

function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>State</h1>
      <h2>Counter: {count} </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <UserProfile />
      <Todo />
    </>
  )
}

export default App
