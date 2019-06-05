import React, { useState } from 'react';
import './comments.css';

const AddComment = ({ onAddComment }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddComment(inputValue);
    setInputValue('');
  };

  return (
    <div className="comments--add-comment">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AddComment;
