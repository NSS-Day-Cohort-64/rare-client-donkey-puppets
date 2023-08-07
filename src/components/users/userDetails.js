import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllSubscriptions, createSubscription, deleteSubscription } from "../../managers/SubscriptionManager";

export const UserDetails = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams();
    const [subscriptions, setSubscriptions] = useState([]);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const navigate = useNavigate();
    const rareUserId = localStorage.getItem("auth_token");
    const rareUser = JSON.parse(rareUserId);

    useEffect(() => {
        fetch(`http://localhost:8088/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [userId]);

    useEffect(() => {
        // Fetch user's subscriptions only once
        getAllSubscriptions().then(data => {
            setSubscriptions(data);
            
            // Check if user is subscribed
            const alreadySubscribed = data.find(s => s.follower_id === parseInt(rareUser) && s.author_id === user.id);
            setIsSubscribed(alreadySubscribed);
        });
    }, [user, rareUser]);

    const createNewSubscription = () => {
        return {
            follower_id: rareUser,
            author_id: parseInt(userId),
            created_on: getCurrentDate()
        };
    };

    const getCurrentDate = () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toDateString().substring(4);
        return formattedDate;
    };

    const handleSubscribe = () => {
        const newSubscription = createNewSubscription();

        createSubscription(newSubscription)
            .then(response => {
                console.log("Subscription added:", response);
                setIsSubscribed(true);
                navigate("/");
            })
            .catch(error => {
                console.error("Error subscribing:", error);
            });
    };

    const handleUnsubscribe = () => {
        const subscriptionToDelete = subscriptions.find(sub => sub.author_id === parseInt(userId));
        
        if (subscriptionToDelete) {
            deleteSubscription(subscriptionToDelete.id)
                .then(() => {
                    setIsSubscribed(false);
                })
                .catch(error => {
                    console.error("Error unsubscribing:", error);
                });
        } else {
            console.error("Subscription not found for user:", userId);
        }
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
            {isSubscribed ? (
            <button onClick={() => handleUnsubscribe()} className="button is-danger">Unsubscribe</button>
        ) : (
            <button onClick={handleSubscribe} className="button is-primary">Subscribe</button>
        )}

        </>
    );
};
