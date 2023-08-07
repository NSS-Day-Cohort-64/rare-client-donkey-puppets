import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import"./posts.css"

export const PostDetails = () => {
    const [post, setPost] = useState({})
    const { postId } = useParams();
    const Navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:8088/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[postId])

    return <section className="postDetails">
    <h2>{post.title}</h2> 
    <h4>{post?.category?.label}</h4>
    <div>
        {post.content}<br/>
        {post.publication_date}
    </div>
    By <Link to={`/userDetails/${post?.user?.id}`}>{post?.user?.first_name} {post?.user?.last_name}</Link>
    <button onClick={() => Navigate(`/comments/${postId}`)}>View Comments</button>
    </section>
}
