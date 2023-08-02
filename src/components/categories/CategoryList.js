import React, { useEffect, useState } from "react";
import { Category } from "./Category";
import CategoryForm from "./CategoryForm";
import { getCategories } from "../../managers/categories";


const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then( data => setCategories(data))
    },[])

  const handleAddCategory = (newCategory) => {
    fetch("http://localhost:8088/categories/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories([...categories, data]);
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  const handleEditCategory = (id) => {
    // Implement your logic for handling the edit action here
    console.log(`Edit category with ID: ${id}`);
  };

  const handleDeleteCategory = (id) => {
    // Implement your logic for handling the delete action here
    console.log(`Delete category with ID: ${id}`);
  };

  return (
    <div style={{ margin: "0rem 3rem" }}>
      <h1><strong>Categories</strong></h1>
      <CategoryForm onAddCategory={handleAddCategory} />
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





