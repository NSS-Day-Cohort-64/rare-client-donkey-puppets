import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Comments = () => {
    const {PostId} = useParams()
    const [postComments, setPostComments ] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8088/comments?post_id=${PostId}`)
        .then(res => res.json())
        .then(data => setPostComments(data))
    },[])

    return postComments.map((c) => <div>{c.content}</div> )
}