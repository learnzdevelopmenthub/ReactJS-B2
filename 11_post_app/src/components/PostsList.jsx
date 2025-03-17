import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchPosts } from "../redux/postsSlice"

const PostsList = () => {
    const { posts, status, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    }, [])

    return(
        <>
            {posts.map( post => (
                <div className="card" key={post.id}>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PostsList