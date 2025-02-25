import { useState } from "react"

const AddTodo = ({addTodo}) => {

    const [text, setText ] = useState("")

    const handleAdd = () => {
        addTodo(text)
        setText("")
    }

    return(
        <div>
            <input type="text" placeholder="Add a new task" 
            onChange={(event) => setText(event.target.value)} 
            value={text} />
            
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddTodo