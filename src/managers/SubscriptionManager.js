export const GetSubscribedPosts = () => {
    const localUser = localStorage.getItem('auth_token')
    const localUserObject = JSON.parse(localUser)
    return fetch(`http://localhost:8088/subscriptions/${localUserObject}`)
    .then(res => res.json())
}