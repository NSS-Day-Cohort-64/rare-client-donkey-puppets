import React, { useState } from "react";

const EditPostForm = ({ post, onSave, onCancel }) => {
  const [editedPost, setEditedPost] = useState(post);

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

      {/* Add other input fields for editing other post properties */}

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditPostForm;
