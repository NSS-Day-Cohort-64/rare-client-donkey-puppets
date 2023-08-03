import React, { useState, useEffect } from "react";


export const MyPosts = () => {
    const [posts, setPosts] = useState([]);

    const localUser = localStorage.getItem('auth_token')
    const localUserObject = JSON.parse(localUser)

    useEffect(() => {
        fetch("http://localhost:8088/posts")
            .then((response) => response.json())
            .then((data) => {
                // Filter the posts based on the user_id
                const filteredPosts = data.filter((post) => post.user_id === localUserObject);
                setPosts(filteredPosts);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    // Function to handle the edit button click
    const handleEditButtonClick = (postId) => {
        // Implement the logic to handle the edit button click
        // For now, let's just log the post ID to the console
        
    };

    // Function to handle the delete button click
    const handleDeleteButtonClick = (postId) => {
        // Implement the logic to handle the delete button click
        // For now, let's just log the post ID to the console
        
    };



    return (
        <div>
            <h2>My Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <div>
                            {post.title} {post.user.first_name} {post.user.last_name} {post.publication_date}
                            {post.category.label}
                            {/* Non-functional buttons for edit and delete */}
                            <button onClick={() => handleEditButtonClick(post.id)}>Edit</button>
                            <button onClick={() => handleDeleteButtonClick(post.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};