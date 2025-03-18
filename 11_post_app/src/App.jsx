import './App.css'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'

function App() {
  return (
    <div className='container'>
      <h1>Posts</h1>
      <PostForm />
      <PostsList />
    </div>
  )
}

export default App
