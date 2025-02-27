import './App.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const count = useSelector( state => state.counter.count )
  const total = useSelector( state => state.calculator.total)

  const dispatch = useDispatch()

  const increment = () => {
    dispatch({type: 'INCREMENT'})
  }

  const calculate = () => {
    dispatch({type: 'ADD', payload: { firstValue: 5, secondValue: 10}})
  }

  return (
    <>
      <h1>Redux Counter</h1>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <h1>Total: {total}</h1>
      <button onClick={calculate}>Calculate</button>
    </>
  )
}

export default App
