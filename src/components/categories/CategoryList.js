import React, { useEffect, useState } from "react";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/categories/") // Replace this with the correct URL to your Python server
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleEditCategory = (id) => {
    // Implement your logic for handling the edit action here
    console.log(`Edit category with ID: ${id}`);
  };

  const handleDeleteCategory = (id) => {
    // Implement your logic for handling the delete action here
    console.log(`Delete category with ID: ${id}`);
  };

  if (!categories || categories.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ margin: "0rem 3rem" }}>
      <h1><strong>Categories</strong></h1>
      <article className="categories">
        {categories.map((category) => (
          <div key={category.id} className="category">
            <h2>{category.label}</h2>
            <button onClick={() => handleEditCategory(category.id)}>Edit</button>
            <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
          </div>
        ))}
      </article>
    </div>
  );
};

export default CategoryList;
