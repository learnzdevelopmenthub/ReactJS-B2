import './App.css'
import { useCallback, useMemo, useState } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: "Learn React"},
    {id: 2, text: "Read Documentation"}
  ])

  const [searchTerm, setSearchTerm] = useState("")

  const addTask = useCallback((text) => {
    console.log("addTask function Redering")

    const obj = { id: Date.now(), text: text }

    setTodos((prevTodos) => [...prevTodos, obj])
  }, [])

  const deleteTodo = useCallback((id) => {
    console.log("addTask function Redering")

    setTodos((prevTodos) => prevTodos.filter( item => item.id != id ))
  }, [])

  const filteredTodos = useMemo(() => {
    return todos.filter( item => item.text.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [todos, searchTerm]) 
  

  return (
    <>
      <h1>To-Do App</h1>
      <AddTodo addTask={addTask} />
      <br />
      <input 
        type="text"
        placeholder='Search tasks...'
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <br />
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App

