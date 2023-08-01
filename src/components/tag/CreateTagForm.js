import React, { useState } from 'react';

export const CreateTag = () => {
  const [tagName, setTagName] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create the new tag object with the tag name
    const newTag = { label: tagName };

    // Send a POST request to add the new tag
    fetch('http://localhost:8088/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTag),
    })
      .then((response) => response.json())
      .then((data) => {
        setTagName('');
      });
  };

  return (
    <div className="is-flex is-justify-content-flex-end mr-5 mt-5">
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
