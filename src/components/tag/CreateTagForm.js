import React, { useState } from 'react';
import { createTag } from "../../managers/tags";

export const CreateTag = ({ tags, setTags }) => {
  const [tagName, setTagName] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create the new tag object with the tag name
    const newTag = { label: tagName };

    // Send a POST request to add the new tag
    createTag(newTag)
      .then((data) => {
        setTags([...tags, data])
        setTagName('');
      });
  };

  return (
    <div className="is-flex is-justify-content-flex-end">
      <div className="box">
        <h2>Create New Tag</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                value={tagName}
                onChange={(e) => setTagName(e.target.value)}
                placeholder="Enter tag name"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary">Add Tag</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
