import React, { useState, useEffect } from "react";
import { TagList } from "./TagList";
import { CreateTag } from "./CreateTagForm";
import { getTags, createTag } from "../../managers/tags";

export const TagContainer = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags().then((tagsData) => setTags(tagsData));
  }, []);

  return (
    <>
      <TagList tags={tags} setTags={setTags} /> {/* Pass the tags state to TagList */}
      <CreateTag tags={tags} setTags={setTags} createTag={createTag} />
    </>
  );
};
