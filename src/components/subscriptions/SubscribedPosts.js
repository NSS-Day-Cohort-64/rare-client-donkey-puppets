import { useEffect, useState } from "react"
import { GetSubscribedPosts } from "../../managers/SubscriptionManager"

export const SubscribedPosts = () => {
    const [subscribedPosts, setSubscribedPosts] = useState([])
    useEffect(() => {
        GetSubscribedPosts()
        .then(data => setSubscribedPosts(data))
    },[])

    
}