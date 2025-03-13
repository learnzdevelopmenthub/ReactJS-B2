import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Post = () => {
    const { id } = useParams()
    const [ post, setPost ] = useState({})

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) =>{
            setPost(json)
        });
    }, [id])
    

    return(
        <div>
            <h1>Post: {post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;