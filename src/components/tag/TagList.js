import React, { useEffect, useState } from "react";
import { getTags } from "../../managers/tags";
import { Tag } from "./Tag";
import "./Tags.css";

export const TagList = ({ tags, setTags }) => {
  useEffect(() => {
    getTags().then((tagsData) => setTags(tagsData));
  }, [setTags]); // Add setTags to the dependency array to trigger the effect when tags are updated

  return (
    <div style={{ margin: "0rem 3rem" }}>
      <h1>Tags</h1>
      <article className="tags">
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </article>
    </div>
  );
};
