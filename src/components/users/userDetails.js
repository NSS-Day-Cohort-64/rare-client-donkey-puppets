import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const UserDetails = () => {
    const [user, setUser] = useState({})
    const { userId } = useParams()
    useEffect(() => {
        fetch(`http://localhost:8088/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return <>
    {user.first_name} {user.last_name}
    <br/>
    {user.profile_image_url}
    <br/>
    {user.username}
    <br/>
    {user.created_on}
    <br/>
    {user.bio}
    </>
}