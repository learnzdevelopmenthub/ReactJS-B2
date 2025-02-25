import './App.css'
import Welcome from './Welcome'
import Button from './Button'

function App() {

  const handleClick = () => {
    alert("Button Clicked.")
  }

  return (
    <>
      <h1>Props</h1>
      <Welcome name="Raja" age={26} />
      <Button handleClick={handleClick}/>
    </>
  )
} 

export default App

// props, receive using destructuring, props default value, function callback
