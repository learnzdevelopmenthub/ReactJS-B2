const TodoList = ({todos, deleteTodo}) => {

    
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
}

export default TodoList