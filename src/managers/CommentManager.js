export const createComment = (newComment) => {
   return fetch("http://localhost:8088/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
    }).then((response) => response.json())
}

export const DeleteComment = (commentId) => {
    return fetch(`http://localhost:8088/comments/${commentId}`, {
        method: "DELETE"
    })
}