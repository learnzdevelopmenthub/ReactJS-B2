import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addUser, deleteUser, updateUser } from './redux/userSlice'

function App() {
  const users = useSelector( state => state.users )
  const [user, setUser] = useState({id: 0, name: "", email: ""})

  const dispatch = useDispatch()

  const handleSubmit = () => {
    // dispatch({type: 'ADD_USER', payload: {...user, id: Date.now()}})
    dispatch(addUser({...user, id: Date.now()}))
    setUser({id: 0, name: "", email: ""})
  }

  const handleDelete = (id) => {
    // dispatch({type: 'DELETE_USER', payload: id })
    dispatch(deleteUser(id))
  }

  const handleEdit = (item) => {
    setUser(item)
  }

  const handleUpdate = () => {
    // dispatch({type: 'UPDATE_USER', payload: user})
    dispatch(updateUser(user))
    setUser({id: 0, name: "", email: ""})
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
      { user.id === 0 ? (
        <button onClick={handleSubmit}>Add</button>
      ) : (
        <button onClick={handleUpdate}>Update</button>
      )}
      

      {users.map( item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default App
