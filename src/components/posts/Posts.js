import { useEffect, useState } from "react"
import { getAllPosts } from "../../managers/PostManager"
import {Post} from "./Post"
import "./posts.css"
export const Posts = () => {
const [allPosts, setPosts] = useState([])

useEffect(() => {
getAllPosts().then( data => setPosts(data))
},[])

return <>
<ul className="AllPosts">
    {
        allPosts.map(p => <Post key={p.id} post={p}/>)
    }
</ul>
</>
}