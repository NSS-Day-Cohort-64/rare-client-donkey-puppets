import React, { useState } from "react";

const CategoryForm = ({ onAddCategory }) => {
  const [newCategory, setNewCategory] = useState({ label: "" });

  const handleChange = (e) => {
    setNewCategory({ label: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCategory(newCategory);
    setNewCategory({ label: "" }); // Reset the input after adding a new category
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newCategory.label}
        onChange={handleChange}
        placeholder="Enter category label"
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
