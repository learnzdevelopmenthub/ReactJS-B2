import { useState } from "react"

const Todo = () => {
    const [todos, setTodos] = useState(['Learn React', 'Read Document'])

    const addTodo = () => {
        setTodos( prevTodos => ["Build Project", "Hello", ...prevTodos])
    }

    return(
        <>
            <h1>Todo</h1>
            <ul>
                {todos.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}

export default Todo