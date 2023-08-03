import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const PostForm = () => {
    const [post, setPost] = useState({
        user_id: 0,
        category_id: 0,
        title: "",
        publication_date: "",
        image_url: null,
        content: "",
        approved: true,
        tags: [], // Initialize tags as an empty array
    });

    const localUser = localStorage.getItem("auth_token");
    const localUserObject = JSON.parse(localUser);

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]); // Add state for tags
    const navigate = useNavigate();



    useEffect(() => {
        // Fetch categories from the API and store them in state
        fetch("http://localhost:8088/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching categories:", error));

        // Fetch tags from the API and store them in state
        fetch("http://localhost:8088/tags")
            .then((response) => response.json())
            .then((data) => setTags(data))
            .catch((error) => console.error("Error fetching tags:", error));
    }, []);

    const handleSaveButtonClick = (event) => {
        event.preventDefault();

        // Create the object to be saved to the API
        const postToSendToAPI = {
            category_id: post.category_id,
            user_id: localUserObject, // Use localUserObject.id to get the user ID
            title: post.title,
            publication_date: post.publication_date,
            image_url: post.image_url,
            content: post.content,
            approved: post.approved,
            tags: post.tags, // Include selected tags in the post object
        };

        // Perform the fetch() to POST the object to the API
        fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postToSendToAPI),
        })
            .then((response) => response.json())
            .then((data) => {
                // Redirect to the postdetails page with the post ID in the URL path
                navigate(`/postdetails/${data.id}`);
            });
    };

    // Function to handle checkbox change for tags
    const handleTagChange = (tagId) => {
        // Check if the tagId is already in the post tags
        const tagIndex = post.tags.indexOf(tagId);
        if (tagIndex === -1) {
            // If the tagId is not in the post tags, add it
            setPost((prevPost) => ({
                ...prevPost,
                tags: [...prevPost.tags, tagId],
            }));
        } else {
            // If the tagId is already in the post tags, remove it
            setPost((prevPost) => ({
                ...prevPost,
                tags: prevPost.tags.filter((tag) => tag !== tagId),
            }));
        }
    };

    return (
        <>
            <form className="postForm">
                <h2 className="postForm__title">New Post</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Category:</label>
                        <select
                            className="form-control"
                            value={post.category_id}
                            onChange={(evt) => setPost({ ...post, category_id: parseInt(evt.target.value) })}
                        >
                            <option value="">Select a Category</option>
                            {/* Map over the categories state to generate options */}
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                {/* Tags checkboxes */}
                <fieldset>
                    <legend>Tags:</legend>
                    {tags.map((tag) => (
                        <label key={tag.id}>
                            <input
                                type="checkbox"
                                value={tag.id}
                                checked={post.tags.includes(tag.id)}
                                onChange={() => handleTagChange(tag.id)}
                            />
                            {tag.label}
                        </label>
                    ))}
                </fieldset>
                <fieldset>
                    <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={post.title}
                        onChange={(evt) => setPost({ ...post, title: evt.target.value })}
                    />
                </fieldset>
                <fieldset>
                    <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Publication Date"
                        value={post.publication_date}
                        onChange={(evt) => setPost({ ...post, publication_date: evt.target.value })}
                    />
                </fieldset>
                <fieldset>
                    <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Content"
                        value={post.content}
                        onChange={(evt) => setPost({ ...post, content: evt.target.value })}
                    />
                </fieldset>
                <button onClick={handleSaveButtonClick} className="btn btn-primary">
                    Submit Post
                </button>
            </form>
        </>
    );
};