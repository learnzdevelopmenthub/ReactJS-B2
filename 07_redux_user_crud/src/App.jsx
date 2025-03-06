import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

function App() {
  const users = useSelector( state => state.users )
  const [user, setUser] = useState({name: "", email: ""})

  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch({type: 'ADD_USER', payload: {id: Date.now(), ...user}})
    setUser({name: "", email: ""})
  }

  const handleDelete = (id) => {
    dispatch({type: 'DELETE_USER', payload: id })
  }

  

  return (
    <>
      <h1>User CRUD using Redux</h1>
      <h2>Add User</h2>

      <input 
        type="text" 
        placeholder='Name'
        onChange={ e => setUser({...user, name: e.target.value})}
        value={user.name}
      />
      <input 
        type="email" 
        placeholder='Email'
        onChange={e => setUser({...user, email: e.target.value})}
        value={user.email}
      />
      <button onClick={handleSubmit}>Add</button>

      {users.map( item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default App
