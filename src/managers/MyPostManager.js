export const getMyPosts = () => {
    return fetch(`http://localhost:8088/my-posts`)
    .then( res => res.json())
}