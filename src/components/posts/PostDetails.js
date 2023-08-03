import { useEffect, useState } from "react"
import { getAllPosts } from "../../managers/PostManager"
import { useParams } from "react-router-dom"

export const PostDetails = () => {
    const {post, setPost} = useState({})
    const { postId } = useParams();
   
    useEffect(() => {
        fetch(`http://localhost:8088/posts?id=${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .then(console.log(post))
    },[postId])

    return <h1>hello</h1>
}