import { memo } from "react"

const TodoList = memo(({todos, deleteTodo}) => {

    console.log("TodoList Redering")
    
    return(
        <ul>
            {todos.map( todo => (
                <li key={todo.id}>
                    {todo.text} &nbsp; 
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
})

export default TodoList