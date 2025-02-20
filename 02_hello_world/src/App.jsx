
import './App.css'
import ChildComponent from './ChildComponent'

function App() {
  const text = "Sample Text"

  const fruits = ["apple", "orange", "banana"]

  fruits.map(item => {
    console.log(item)
  })

  const isLoggedin = false

  const btnClick = (label) => {
    console.log(`${label} Button clicked!`)
  }
 
  return(
    <>
      { isLoggedin && <h1 style={{color: "red"}}>Hello World</h1>}

      <p>{text}</p>

      { fruits.map( (item, index) => (
        <h6 key={index}>{item}</h6>
      ))}

      <ChildComponent />

      <button onClick={() => btnClick("Increment")}>Increment</button>
      <button onClick={() => btnClick("Decrement")}>Decrement</button>
    </>
  )
}

export default App

// folder structure, component, JSX, Strictmode, Fragment, map & key, Child Component, inline css