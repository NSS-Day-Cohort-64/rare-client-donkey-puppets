import { useEffect, useState } from "react"
import { GetSubscribedPosts } from "../../managers/SubscriptionManager"
import { Post } from "../posts/Post"
import { Link } from "react-router-dom"
import "./subscribed.css"

export const SubscribedPosts = () => {
    const [subscribedPosts, setSubscribedPosts] = useState([])
    useEffect(() => {
        GetSubscribedPosts()
        .then(data => setSubscribedPosts(data))
    },[])

    return <>
    <h2>Your Subscriptions</h2>
    {subscribedPosts.map(p =>
    <div key={p.id}>
        <ul className="subscribedPostsList">
            <li className="list-item">
            view post - <Link to={`/postDetails/${p.post.id}`}>{p.post.title}</Link>  
            </li>
            <li className="list-item">
            {p.post.content}
            </li>
            <li className="list-item">
            publication date {p.post.publication_date}
            </li>
            <li className="list-item">
            category: {p.category.label}
            </li>
        </ul>
    </div> 
    )}
    </>
}