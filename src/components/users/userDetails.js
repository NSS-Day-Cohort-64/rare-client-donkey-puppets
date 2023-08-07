import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {  createSubscription } from "../../managers/SubscriptionManager";


export const UserDetails = () => {
    const [user, setUser] = useState({})
    const { userId } = useParams()
    const navigate = useNavigate()
    const rareUserId = localStorage.getItem("auth_token");
    const rareUser = JSON.parse(rareUserId);

    useEffect(() => {
        fetch(`http://localhost:8088/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    
    const createNewSubscription = () => {
        return {
            follower_id: rareUser,
            author_id: parseInt(userId),
            created_on: getCurrentDate()
        };
    };

    const getCurrentDate = () => {
        const currentDate = new Date()
        const formattedDate = currentDate.toDateString().substring(4)
        return formattedDate
    }
    
    const handleSubscribe = () => {
        const newSubscription = createNewSubscription();
    
        createSubscription(newSubscription)
            .then(response => {
                console.log("Subscription added:", response);
                navigate("/");
            })
            .catch(error => {
                console.error("Error subscribing:", error);
            });
    };
    

    return (
        <>
            {user.first_name} {user.last_name}
            <br/>
            {user.profile_image_url}
            <br/>
            {user.username}
            <br/>
            {user.created_on}
            <br/>
            {user.bio}
            <br/>
            <button onClick={handleSubscribe} className="button is-primary">Subscribe</button>
        </>
    )
}
