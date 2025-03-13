import './App.css'
import Router from './components/Router'
import { Link, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const handleNav = () => {
    navigate('/about')
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Router />
      <button onClick={handleNav}>About</button>
    </div>
  )
}

export default App
