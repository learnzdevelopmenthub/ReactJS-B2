import { memo, useState } from "react"

const AddTodo = memo(({addTask}) => {
    console.log("AddTodo Redering")

    const [text, setText ] = useState("")

    const handleAdd = () => {
        addTask(text)
        setText("") //reset empty value in input
    }

    return(
        <div>
            <input type="text" placeholder="Add a new task" 
            onChange={(event) => setText(event.target.value)} 
            value={text} />
            
            <button onClick={handleAdd}>Add</button>
        </div>
    )
})

export default AddTodo