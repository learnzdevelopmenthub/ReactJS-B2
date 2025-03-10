import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [post, setPost] = useState({})
  const [postID, setPostID] = useState(1)
  const [loader, setLoader] = useState(false)

  useEffect(async () => {
    // update loader before api call
    setLoader(true)

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    const data  = await response.json()
    setPost(data)
    setLoader(false)

  }, [postID])

  return (
    <>
      <h1>Use Effect</h1>
      { loader && <div class="loader"></div>}

      { !loader && 
        <>
          <div>
            <h1>{post.id} - {post.title}</h1>
            <p>{post.body}</p>
          </div>
          <button onClick={() => setPostID(postID - 1)}>Prev</button>
          <button onClick={() => setPostID(postID + 1)}>Next</button>
        </>
      }
    </>
  )
}

export default App
