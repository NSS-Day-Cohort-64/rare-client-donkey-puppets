import React from "react";

const Category = ({ category }) => (
  <section className="category">
    <div>{category.label}</div>
  </section>
);

export default Category;
