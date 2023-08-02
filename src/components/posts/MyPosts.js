import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MyPosts.css"; // Import your CSS file for this component

export const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null); // Add a new state for the post being edited
  const { postId } = useParams();
  const navigate = useNavigate();
  const localUser = localStorage.getItem("auth_token");
  const localUserObject = JSON.parse(localUser);

  useEffect(() => {
    fetch("http://localhost:8088/posts")
      .then((response) => response.json())
      .then((data) => {
        const filteredPosts = data.filter(
          (post) => post.user_id === localUserObject
        );
        setPosts(filteredPosts);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleEditButtonClick = (post) => {
    setEditingPost(post);
  };

  const handleSave = (editedPost) => {
    fetch(`http://localhost:8088/posts/${editedPost.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPost),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedPosts = posts.map((post) =>
          post.id === editedPost.id ? editedPost : post
        );
        setPosts(updatedPosts);
        setEditingPost(null);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCancel = () => {
    setEditingPost(null);
  };

  const handleDeleteButtonClick = (postId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmDelete) {
      fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE",
      })
        .then(() => {
          setPosts((prevPosts) =>
            prevPosts.filter((post) => post.id !== postId)
          );
        })
        .catch((error) => console.error("Error deleting post:", error));
    }
  };

  const EditPostForm = ({ post, onSave, onCancel }) => {
    // Create a separate state for the edited post
    const [editedPost, setEditedPost] = useState({
      ...post,
      category_id: post.category.id, // Store the category_id from the original post
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setEditedPost({ ...editedPost, [name]: value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      onSave(editedPost);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={editedPost.title}
          onChange={handleChange}
        />

        <label>Content</label>
        <textarea
          name="content"
          value={editedPost.content}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    );
  };

  return (
    <div>
      <h2>My Posts</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            {editingPost && editingPost.id === post.id ? (
              <EditPostForm
                post={editingPost}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ) : (
              <div>
                <h3>Title: {post.title}</h3>
                <p>Category: {post.category.label}</p>
                <p>{post.content}</p>
                <p>Date Posted: {post.publication_date}</p>
                <strong>
                  User: {post.user.first_name} {post.user.last_name}
                </strong>
                <button onClick={() => handleEditButtonClick(post)}>
                  Edit
                </button>
                <button
                  className="footer-button"
                  onClick={() => handleDeleteButtonClick(post.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPosts;
