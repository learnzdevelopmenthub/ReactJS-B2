import './App.css'
import { useState } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: "Learn React"},
    {id: 2, text: "Read Documentation"}
  ])

  const addTodo = (text) => {
    const obj = { id: Date.now(), text: text }

    setTodos((prevTodos) => [...prevTodos, obj])
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter( item => item.id != id ))
  }

  return (
    <>
      <h1>To-Do App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App

