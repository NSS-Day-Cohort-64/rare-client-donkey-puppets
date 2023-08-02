import { useState } from "react"
import { useNavigate } from "react-router-dom"
import React from "react";

export const PostForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [post, setPost] = useState({
        user_id: 0,
        category_id: 0,
        title: "",
        publication_date: "",
        image_url: null,
        content: "",
        approved: true




    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the post list
    */

    

    const localUser = localStorage.getItem('auth_token')
    const localUserObject = JSON.parse(localUser)

    
    const navigate = useNavigate();

    const handleSaveButtonClick = (event) => {
        event.preventDefault()


        // TODO: Create the object to be saved to the API

        const postToSendToAPI = {
            category_id: post.category_id,
            user_id: localUserObject,
            title: post.title,
            publication_date: post.publication_date,
            image_url: post.image_url,
            content: post.content,
            approved: post.approved
        }
        // TODO: Perform the fetch() to POST the object to the API
        return fetch(` http://localhost:8088/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/postdetails")
            })

    }

    // 

    return (
        <>
            <form className="postForm">
                <h2 className="postForm__title">New Post</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description"></label>
                        <select
                            className="form-control"
                            value={post.category_id}
                            onChange={(evt) => setPost({ ...post, category_id: parseInt(evt.target.value) })}
                        >
                            <option value="">Select a Category</option>
                            <option value="1">News</option>
                            <option value="2">Technology</option>
                            <option value="3">Science</option>
                            <option value="4">Entertainment</option>
                            <option value="5">Travel</option>
                        </select>
                    </div>
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