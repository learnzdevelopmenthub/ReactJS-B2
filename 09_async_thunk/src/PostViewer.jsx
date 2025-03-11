import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost, incrementPostId, decrementPostId } from "./store/postSlice";

const PostViewer = () => {
    const dispatch = useDispatch()
    const {post, status, error, postId} = useSelector(state => state.posts)

    useEffect(()=>{
        dispatch(fetchPost(postId))
    }, [postId])

    const handlePrevious = () => {
        dispatch(decrementPostId(1))
    }

    const handleNext = () => {
        dispatch(incrementPostId(1))
    }

    return(
        <>  
            { status === 'loading' && <p>Loading...</p>}
            { status === 'failed' && <p> Error: {error}</p>}
            { status === 'succeeded' && (
                <div>
                    <h1>Post Viewer(ID: {postId})</h1>
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <div>
                        <button onClick={handlePrevious}>Prev</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}
        </>
    )

}

export default PostViewer;