import React from "react";
import { Tag } from "./Tag";
import "./Tags.css";

export const TagList = ({ tags }) => {
  const sortedTags = [...tags].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div style={{ margin: "0rem 3rem" }}>
      <h1>Tags</h1>
      <article className="tags">
        {sortedTags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </article>
    </div>
  );
};
